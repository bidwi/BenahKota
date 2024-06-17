import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../../global/config';

const historyTemplate = (user) => {
  if (user.username !== localStorage.getItem('username')) {
    return '';
  }

  const apiUrl = `https://fuzzy-mag-bidwi-7f3836df.koyeb.app/informasi/${user.id}?api_key=${CONFIG.KEY}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.data.infoBenah.gambar;
      let status = data.data.infoBenah.status;

      status = status ? 'Selesai' : 'Belum selesai';

      const cardHTML = `
        <div class="card mb-3 d-flex flex-row" style="width: 70vw;">
          <img class="card-img-top lazyload" style="width: 16%;" src="${imageUrl}" alt="...">
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: #4D869C;">${user.lokasiBenah}</h5>
            <h6 class="card-subtitle" style="color: #4D869C;">Status: ${status}</h6>
            <p class="card-text">${user.deskripsi}</p>
          </div>
        </div>
      `;

      const cardsContainer = document.getElementById('cardsContainer');
      cardsContainer.innerHTML += cardHTML;
    })
    .catch((error) => console.error('Error fetching data:', error));

  return `
    <div id="cardsContainer"></div>
  `;
};

const berandaTemplate = (user) => {
  const apiUrl = `https://fuzzy-mag-bidwi-7f3836df.koyeb.app/informasi/${user.id}?api_key=${CONFIG.KEY}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.data.infoBenah.gambar;

      const cardHTML = `
        <div class="card m-2" style="width: 15rem;">
          <img data-src="${imageUrl}" class="card-img-top lazyload" alt="...">
          <div class="card-body">
          <p class="card-text fw-bold" style="font-size: 16px;">${user.lokasiBenah}</p>
          <h6 class="card-subtitle mb-2 text-body-secondary">${user.deskripsi}</h6>
          <h6 class="card-title" style="font-size: 14px;">Dari: <b>${user.username}</b></h6>
          </div>
        </div>
      `;

      const cardsContainer = document.getElementById('cardsContainer');
      cardsContainer.innerHTML += cardHTML;
    })
    .catch((error) => console.error('Error fetching data:', error));

  return `
    <div id="cardsContainer" class="d-flex flex-wrap justify-content-center gap-5" style="width: 100%;" >
      <!-- Container untuk semua card yang akan ditampilkan -->
    </div>
  `;
};

const navbarTemplate = `
<nav class="navbar" style="margin-top: -1rem; background-color: #EEF7FF; position: fixed; top: 0; right: 0; left: 0;">
    <div class="container-fluid" style="margin-left: 9rem; margin-bottom: -18px;">
        <form class="d-flex" role="search">
            <input class="form-control me-2" style="border: 1.7px solid #4D869C; cursor: pointer;" type="search" placeholder="Cari" aria-label="Search">
            <button class="btn" style="background-color: #4D869C;" type="submit"><img src="../../icons/search.svg" alt="search"/></button>
        </form>
        <h4 class="mt-3 me-2" style="font-weight: bold; color: #4D869C;"><span style="display: block;">${localStorage.getItem(
          'username'
        )}</span><p class="text-end" style="font-size: small;">admin</p></h4>
    </div>
</nav>

<div class="d-flex flex-column flex-shrink-0 p-3" style="background-color: #4D869C; position: fixed; top: 0; bottom: 0; left: 0; width: 135px; z-index: 1000; max-width: 100%;">
    <a href="#/login" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <use xlink:href="#bootstrap"></use>
      <span class="fs-6 ms-1" style="color: white;font-weight: bold;">Benah Kota</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#/admin-pengguna" class="nav-link pengguna mb-1" style="font-size: 13px; color: #4D869C; font-weight: bold; background-color: white" aria-current="page">     
          Pengguna
        </a>
      </li>
      <li>
        <a href="#/admin-laporan" class="nav-link laporan" style="font-size: 13px; color: white;">
          Laporan
        </a>
      </li>
    </ul>
    <hr>
    <a href="#/login" id="logout-btn" style="color: white; font-weight: bolder;font-size: 13px;" class="d-flex align-items-center btn btn-link text-decoration-none"><img src="../../icons/logout.svg" class="me-1" alt="logout"/>Logout</a>
</div>
`;

const navbarLaporanTemplate = `
<nav class="navbar" style="margin-top: -1rem; background-color: #EEF7FF; position: fixed; top: 0; right: 0; left: 0;">
    <div class="container-fluid" style="margin-left: 9rem; margin-bottom: -18px;">
        <form class="d-flex" role="search">
            <input class="form-control me-2" style="border: 1.7px solid #4D869C; cursor: pointer;" type="search" placeholder="Cari" aria-label="Search">
            <button class="btn" style="background-color: #4D869C;" type="submit"><img src="../../icons/search.svg" alt="search"/></button>
        </form>
        <h4 class="mt-3 me-2" style="font-weight: bold; color: #4D869C;"><span style="display: block;">${localStorage.getItem(
          'username'
        )}</span><p class="text-end" style="font-size: small;">admin</p></h4>
    </div>
</nav>

<div class="d-flex flex-column flex-shrink-0 p-3" style="background-color: #4D869C; position: fixed; top: 0; bottom: 0; left: 0; width: 135px; z-index: 1000; max-width: 100%;">
    <a href="#/login" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <use xlink:href="#bootstrap"></use>
      <span class="fs-6 ms-1" style="color: white;font-weight: bold;">Benah Kota</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
      <a href="#/admin-pengguna" class="nav-link pengguna mb-1" style="font-size: 13px; color: white;">
        Pengguna
      </a>
      </li>
      <li>
      <a href="#/admin-laporan" class="nav-link laporan" style="font-size: 13px; color: #4D869C; font-weight: bold; background-color: white" aria-current="page">     
        Laporan
      </a>
      </li>
    </ul>
    <hr>
    <a href="#/login" id="logout-btn" style="color: white; font-weight: bolder;font-size: 13px;" class="d-flex align-items-center btn btn-link text-decoration-none"><img src="../../icons/logout.svg" class="me-1" alt="logout"/>Logout</a>
</div>
`;

const handleDelete = (event) => {
  const button = event.target;
  const userId = button.getAttribute('data-user-id');
  const deleteUrl = `https://fuzzy-mag-bidwi-7f3836df.koyeb.app/informasi/${userId}?api_key=${CONFIG.KEY}`;

  fetch(deleteUrl, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        const row = button.closest('tr');
        if (row) {
          row.remove();
          localStorage.setItem('needsDoubleRefresh', 'true');
          window.location.reload(); // First refresh
        }
      } else {
        console.error('Failed to delete data:', response.statusText);
      }
    })
    .catch((error) => console.error('Error deleting data:', error));
};

const tablePenggunaTemplate = async (user) => {
  const apiUrlInformasi = `https://fuzzy-mag-bidwi-7f3836df.koyeb.app/pengguna/${user.id}?api_key=${CONFIG.KEY}`;

  const informasiResponse = await fetch(apiUrlInformasi);
  const informasiData = await informasiResponse.json();
  console.log(informasiData);
  const password = informasiData.data.infoPengguna.password || 'Tidak tersedia';

  return `
    <tr data-user-id="${user.id}">
      <td>${user.username}</td>
      <td>${user.lokasi}</td>
      <td>${user.noWa}</td>
      <td>${password}</td> <!-- Tampilkan password di sini -->
      <td>${user.peran}</td>
      <td class="text-center">
        <button type="button" style="font-weight: bolder;" class="btn m-2 btn-sm btn-primary text-decoration-none edit-btn">Edit</button>
        <button type="button" style="font-weight: bolder;" class="btn m-2 btn-sm btn-danger text-decoration-none delete-btn">Hapus</button>
      </td>
    </tr>`;
};

const tableLaporanTemplate = (user) => {
  const apiUrl = `https://fuzzy-mag-bidwi-7f3836df.koyeb.app/informasi/${user.id}?api_key=${CONFIG.KEY}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.data.infoBenah.gambar;
      let statusUrl = data.data.infoBenah.status;

      statusUrl = statusUrl ? 'Selesai' : 'Belum selesai';

      const tableHTML = `<tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>
          <a href="${imageUrl}">
            <img data-src="${imageUrl}" class="text-primary lazyload" style="width: 50px; height: 50px;" alt="Foto Profil ${user.username}">
          </a>
        </td>
        <td>${user.deskripsi}</td>
        <td>${user.lokasiBenah}</td>
        <td>${statusUrl}</td>
        <td class="text-center">
          <button type="button" style="font-weight: bolder;" class="btn m-2 btn-sm btn-danger text-decoration-none delete-btn" data-user-id="${user.id}">Hapus</button>
        </td>
      </tr>`;

      const tableBody = document.getElementById('table');
      if (tableBody) {
        tableBody.innerHTML += tableHTML;

        const deleteBtns = tableBody.querySelectorAll('.delete-btn');
        deleteBtns.forEach((btn) => {
          btn.addEventListener('click', handleDelete);
        });
      }
    })
    .catch((error) => console.error('Error fetching data:', error));

  return '';
};

export {
  berandaTemplate,
  tablePenggunaTemplate,
  historyTemplate,
  navbarTemplate,
  navbarLaporanTemplate,
  tableLaporanTemplate,
};
