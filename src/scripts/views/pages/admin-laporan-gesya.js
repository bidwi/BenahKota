import {
  navbarLaporanTemplate,
  tableLaporanTemplate,
} from '../templates/template';
import BenahKotaSource from '../../data/benahkota-source';
import notyf from '../../global/toast-initiator';

const handleLogout = () => {
  localStorage.clear();
  window.location.hash = '#/login';
};

const AdminLaporanGesya = {
  async render() {
    return `
      <main style="margin-left: 9.4rem">
        <nav id="navbar"></nav>
        <section style="margin-right: 1rem; margin-top: 3rem;">
          <h5 class="mb-3" style="color: #4D869C; font-weight: bolder;">Data Laporan Kerusakan</h5>
          <table class="table table-striped table-bordered border-secondary table-sm">
            <thead>
              <tr class="text-center">
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Gambar</th>
                <th scope="col">Deskripsi</th>
                <th scope="col">Lokasi</th>
                <th scope="col">Status</th>
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
    navbarContainer.innerHTML = navbarLaporanTemplate;

    const logoutButton = navbarContainer.querySelector('#logout-btn');
    if (logoutButton) {
      logoutButton.addEventListener('click', handleLogout);
    }

    const users = await BenahKotaSource.informasiBenahKota();
    const originalData = [...users];

    const tableBody = document.querySelector('#table');
    users.forEach((user) => {
      tableBody.innerHTML += tableLaporanTemplate(user);
    });

    const searchForm = document.querySelector('form[role="search"]');
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const searchTerm = this.querySelector('input[type="search"]')
        .value.trim()
        .toLowerCase();

      const filteredData = originalData.filter(
        (user) =>
          user.username.toLowerCase().includes(searchTerm) ||
          user.deskripsi.toLowerCase().includes(searchTerm) ||
          user.lokasiBenah.toLowerCase().includes(searchTerm)
      );

      tableBody.innerHTML = '';
      filteredData.forEach((user) => {
        tableBody.innerHTML += tableLaporanTemplate(user);
      });
    });

    // Double refresh logic after deletion
    if (localStorage.getItem('needsDoubleRefresh') === 'true') {
      localStorage.removeItem('needsDoubleRefresh');
      notyf.open({
        type: 'info',
        duration: 7000,
        message: '<b>Data diproses, refresh jika masih belum</b>',
      });

      // First refresh
      setTimeout(() => {
        window.location.reload();
      }, 2000);

      // Second refresh
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Adjust timing as needed
    }
  },
};

export default AdminLaporanGesya;
