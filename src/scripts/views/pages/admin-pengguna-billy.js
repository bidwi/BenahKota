import { navbarTemplate, tablePenggunaTemplate } from '../templates/template';
import BenahKotaSource from '../../data/benahkota-source';
import CONFIG from '../../global/config';

const handleLogout = () => {
  localStorage.clear();
  window.location.hash = '#/login';
};

const AdminPenggunaBilly = {
  async render() {
    return `
<main style="margin-left: 9.4rem">
  <nav id="navbar"></nav>
  <section style="margin-right: 1rem; margin-top: 3rem;">
    <h5 class="mb-3" style="color: #4D869C; font-weight: bolder;">Data Pengguna</h5>
    <table class="table table-striped table-bordered border-secondary table-sm">
      <thead>
        <tr class="text-center">
          <th scope="col">Username</th>
          <th scope="col">Lokasi</th>
          <th scope="col">No. WA</th>
          <th scope="col">Password</th>
          <th scope="col">Peran</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody id="table">
      </tbody>
    </table>
  </section>
<main>
   `;
  },

  async afterRender() {
    const navbarContainer = document.querySelector('#navbar');
    navbarContainer.innerHTML = navbarTemplate;

    const logoutButton = navbarContainer.querySelector('#logout-btn');
    if (logoutButton) {
      logoutButton.addEventListener('click', handleLogout);
    }

    const users = await BenahKotaSource.penggunaBenahKota();
    const tableBody = document.querySelector('#table');

    // Menggunakan Promise.all untuk menunggu semua template selesai
    const rows = await Promise.all(
      users.map((user) => tablePenggunaTemplate(user))
    );
    tableBody.innerHTML = rows.join('');

    this._addEventListeners();
  },

  _addEventListeners() {
    const tableBody = document.querySelector('#table');
    tableBody.removeEventListener('submit', this._handleSearchSubmit);

    tableBody.querySelectorAll('.delete-btn').forEach((btn) => {
      btn.addEventListener('click', async (event) => {
        const row = event.target.closest('tr');
        const userId = row.dataset.userId;
        try {
          await fetch(
            `https://fuzzy-mag-bidwi-7f3836df.koyeb.app/pengguna/${userId}?api_key=${CONFIG.KEY}`,
            {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          row.remove();
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      });
    });

    tableBody.querySelectorAll('.edit-btn').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const row = event.target.closest('tr');
        if (!row) return;

        const userId = row.dataset.userId || '';
        const username = row.children[0].textContent;
        const lokasi = row.children[1].textContent;
        const noWa = row.children[2].textContent;
        const password = row.children[3].textContent;
        const peran = row.children[4].textContent;

        row.dataset.userId = userId;

        row.innerHTML = `
        <td><input type="text" value="${username}" class="form-control form-control-sm"></td>
        <td><input type="text" value="${lokasi}" class="form-control form-control-sm"></td>
        <td><input type="text" value="${noWa}" class="form-control form-control-sm"></td>
        <td><input type="text" value="${password}" class="form-control form-control-sm"></td>
        <td><input type="text" value="${peran}" class="form-control form-control-sm"></td>
        <td class="text-center">
          <button type="button" class="btn m-2 fw-bolder btn-sm btn-primary save-btn">Simpan</button>
          <button type="button" class="btn m-2 fw-bolder btn-sm btn-outline-dark cancel-btn">Batal</button>
        </td>
      `;

        row.querySelector('.save-btn').addEventListener('click', async () => {
          const updatedUser = {
            username: row.querySelector('td:nth-child(1) input').value,
            lokasi: row.querySelector('td:nth-child(2) input').value,
            noWa: row.querySelector('td:nth-child(3) input').value,
            password: row.querySelector('td:nth-child(4) input').value,
            peran: row.querySelector('td:nth-child(5) input').value,
          };

          try {
            await fetch(
              `https://fuzzy-mag-bidwi-7f3836df.koyeb.app/pengguna/${userId}?api_key=${CONFIG.KEY}`,
              {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
              }
            );

            row.innerHTML = await tablePenggunaTemplate({
              id: userId,
              ...updatedUser,
            });
            this._addEventListeners();
          } catch (error) {
            console.error('Error updating user:', error);
          }
        });

        row.querySelector('.cancel-btn').addEventListener('click', async () => {
          row.innerHTML = await tablePenggunaTemplate({
            id: userId,
            username,
            lokasi,
            noWa,
            password,
            peran,
          });
          this._addEventListeners();
        });
      });
    });

    const searchForm = document.querySelector('form[role="search"]');
    this._handleSearchSubmit = function (event) {
      event.preventDefault();

      const searchTerm = this.querySelector('input[type="search"]')
        .value.trim()
        .toLowerCase();

      const rows = tableBody.querySelectorAll('tr');
      rows.forEach((row) => {
        const username = row.children[0].textContent.toLowerCase();
        const lokasi = row.children[1].textContent.toLowerCase();
        const noWa = row.children[2].textContent.toLowerCase();

        const currentRow = row;

        if (
          username.includes(searchTerm) ||
          lokasi.includes(searchTerm) ||
          noWa.includes(searchTerm)
        ) {
          currentRow.style.display = '';
        } else {
          currentRow.style.display = 'none';
        }
      });
    };

    searchForm.addEventListener('submit', this._handleSearchSubmit);
  },
};

export default AdminPenggunaBilly;
