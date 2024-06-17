import { berandaTemplate } from '../templates/template';
import BenahKotaSource from '../../data/benahkota-source';
import notyf from '../../global/toast-initiator';

const BerandaBilly = {
  async render() {
    notyf.success('Mohon tunggu sebentar!');
    return `
      <div class="card mx-auto mt-4" style="width: 18rem;">
        <div class="card-body d-flex justify-content-center flex-column">
          <div class="d-flex justify-content-between w-100">
            <h5 class="card-title" style="font-weight: bold; word-wrap: break-word; max-width: 15ch;" id="username"></h5>
          </div>
          <h6 class="card-subtitle mb-2 text-body-secondary" id="peran"></h6>
          <h6 class="card-title mb-2 text-body-secondary" id="noWa"></h6>
          <button class="btn btn-sm btn-danger btn-block mt-3" id="logout">Logout</button>
        </div>
      </div>

      <h2 class="text-center mt-5 mx-5 mb-4" style="color: #4D869C; font-weight: bolder;">Berbagai Permasalahan di Seluruh Indonesia</h2>
      <article class="d-flex flex-wrap justify-content-center gap-5 my-3 mx-5"  id="beranda"></article>
    `;
  },

  async afterRender() {
    const user = await BenahKotaSource.informasiBenahKota();
    const berandaContainer = document.querySelector('#beranda');
    const noWaElement = document.querySelector('#noWa');
    const peranElement = document.querySelector('#peran');
    const usernameElement = document.querySelector('#username');

    user.forEach((user) => {
      berandaContainer.innerHTML += berandaTemplate(user);
    });

    const pengguna = await BenahKotaSource.penggunaBenahKota();

    const nama = pengguna[pengguna.length - 1];
    const nomor = pengguna[pengguna.length - 1];
    const peran = pengguna[pengguna.length - 1];
    usernameElement.textContent = nomor.username;
    peranElement.textContent = peran.peran;
    noWaElement.textContent = nama.noWa;

    const logoutButton = document.querySelector('#logout');
    logoutButton.addEventListener('click', function () {
      localStorage.removeItem('username');
      localStorage.removeItem('peran');
      localStorage.removeItem('noWa');
      window.location.hash = '#/login';
    });

    const storedUsername = localStorage.getItem('username');
    const storedRole = localStorage.getItem('peran');
    const storedNoWa = localStorage.getItem('noWa');

    if (storedUsername) {
      usernameElement.textContent = storedUsername;
    }

    if (storedRole) {
      peranElement.textContent = storedRole;
    }

    if (storedNoWa) {
      noWaElement.textContent = storedNoWa;
    }
  },
};

export default BerandaBilly;
