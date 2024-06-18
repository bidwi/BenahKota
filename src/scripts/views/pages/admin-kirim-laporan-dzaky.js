import API_ENDPOINT from '../../global/api-endpoint';
import notyf from '../../global/toast-initiator';
import BenahKotaSource from '../../data/benahkota-source';
import { tableLaporanTemplate } from '../templates/template';

const AdminKirimLaporanDzaky = {
  async render() {
    return `
    <main class="bg-gradient-primary mb-5">
      <main class="container">
        <div class="row justify-content-center">
          <div class="col-md-60 col-lg-6">
            <section class="card o-hidden border-0" style="background-color: #DDF0EE; border-radius: 20px; margin-top: 75px;">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-12">
                    <article class="p-5">
                      <header>
                        <h1 style="color: #4D869C !important;" class="h4 text-gray-900 mb-4 fw-bolder text-center">Kirim Laporan</h1>
                      </header>
                      <form id="laporanForm" class="user" method="post" action="/kirimlaporan" enctype="multipart/form-data">
                        <div class="mb-3">
                          <label for="id" style="color: #4D869C !important;" class="form-label fw-bold">ID Laporan <br> <i style="font-size: 13px;" class="fw-bold"> *Ambil ID di bawah form untuk mengambil data </i> </label>
                          <input type="text" class="form-control rounded-2" style="border-radius: 13px; border: 1.4px solid #ccc;" id="id" placeholder="Masukkan ID" required>
                          <button type="button" id="fetchDataBtn" style="background-color: #4D869C !important;" class="btn d-flex justify-content-end ms-1 btn-dark btn-sm mt-2">Ambil Data</button>
                        </div>
                        <div class="mb-3">
                          <label for="username" style="color: #4D869C !important;" class="form-label fw-bold">Username</label>
                          <input type="text" class="form-control rounded-2" style="border-radius: 13px; border: 1.4px solid #ccc;" id="username" placeholder="Username" readonly>
                        </div>
                        <div class="mb-3">
                          <label for="lokasi" style="color: #4D869C !important;" class="form-label fw-bold">Lokasi</label>
                          <input type="text" class="form-control rounded-2" style="border-radius: 13px; border: 1.4px solid #ccc;" id="lokasi" placeholder="Lokasi" readonly>
                        </div>
                        <div class="form-group">
                          <label for="deskripsi" style="color: #4D869C !important;" class="fw-bold mb-2">Gambar</label>
                          <input type="file" id="img" name="img" class="form-control form-control-user" style="border-radius: 8px; border: 1.4px solid #ccc;" placeholder="Masukan Gambar">
                        </div>
                        <br>
                        <div class="form-group">
                          <label for="deskripsi" style="color: #4D869C !important;" class="fw-bold mb-2">Deskripsi Perbaikan</label>
                          <textarea id="deskripsi" name="deskripsi" class="form-control form-control-user" style="height: 100px; border-radius: 8px; border: 1.4px solid #ccc;" placeholder="Deskripsi Perbaikan"></textarea>
                        </div>
                        <br>
                        <div style="display: flex; justify-content: center;">
                          <button type="submit" class="btn btn-primary fw-bold btn-user btn-block" style="border-radius: 20px; width: 550px; color: #FFFFFF; background-color: #4D869C;">Kirim Laporan</button>
                        </div>
                      </form>
                      <br>
                      </article>
                      </div>
                      </div>
                      </div>
                      </section>
                      </div>
                      </div>
                      </main>
                      <div id="data-table-container" class="mx-5 mt-5">
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
                      </div>
    </main>
    `;
  },

  async afterRender() {
    const fetchDataBtn = document.getElementById('fetchDataBtn');
    const laporanForm = document.getElementById('laporanForm');
    const idInput = document.getElementById('id');
    const usernameInput = document.getElementById('username');
    const lokasiInput = document.getElementById('lokasi');

    fetchDataBtn.addEventListener('click', async () => {
      const id = idInput.value.trim();
      if (!id) {
        notyf.open({
          type: 'error',
          message: 'ID Laporan tidak boleh kosong!',
        });
        return;
      }

      try {
        const response = await fetch(API_ENDPOINT.INFORMASI);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Gagal mengambil data!');
        }

        const laporan = data.data.informasi.find((item) => item.id === id);

        if (!laporan) {
          notyf.open({
            type: 'error',
            message: 'Data tidak ditemukan!',
          });
          return;
        }

        usernameInput.value = laporan.username;
        lokasiInput.value = laporan.lokasiBenah || ''; // Pastikan lokasiBenah terisi jika ada
      } catch (error) {
        console.error('Error fetching data:', error);
        notyf.open({
          type: 'error',
          message: error.message || 'Terjadi kesalahan saat mengambil data!',
        });
      }
    });

    laporanForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const id = idInput.value.trim();
      const imgFile = document.getElementById('img').files[0];
      const deskripsiPerbaikan = document
        .getElementById('deskripsi')
        .value.trim();
      const username = usernameInput.value.trim();
      const lokasi = lokasiInput.value.trim();
      if (!id || !imgFile || !deskripsiPerbaikan || !username || !lokasi) {
        notyf.open({
          type: 'error',
          message: 'Semua field harus diisi!',
        });
        return;
      }

      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });

      try {
        const base64Img = await toBase64(imgFile);

        const payload = {
          username,
          gambar: base64Img,
          deskripsi: deskripsiPerbaikan,
          lokasiBenah: lokasi, // Tambahkan lokasiBenah ke payload
          status: true,
        };

        const response = await fetch(API_ENDPOINT.DETAIL_INFORMASI(id), {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Gagal mengirim laporan!');
        }

        notyf.open({
          type: 'success',
          message: 'Laporan berhasil dikirim!',
        });

        laporanForm.reset();
        localStorage.setItem('needsDoubleRefresh', 'true');
        window.location.reload();
      } catch (error) {
        console.error('Error submitting form:', error);
        notyf.open({
          type: 'error',
          message: error.message || 'Terjadi kesalahan saat mengirim laporan!',
        });
      }
    });

    // Fetch and display table data
    const tableBody = document.querySelector('#table');
    const users = await BenahKotaSource.informasiBenahKota();

    // Filter hanya laporan yang statusnya belum selesai
    const unfinishedReports = users.filter((user) => !user.status);
    tableBody.innerHTML = '';

    unfinishedReports.forEach((user) => {
      tableBody.innerHTML += tableLaporanTemplate(user);
    });

    // ...
  },
};

if (localStorage.getItem('needsDoubleRefresh') === 'true') {
  localStorage.removeItem('needsDoubleRefresh');
  notyf.open({
    type: 'info',
    duration: 7000,
    message: '<b>Data diproses, refresh jika masih belum</b>',
  });
  setTimeout(() => {
    window.location.reload();
  }, 2000);
}

export default AdminKirimLaporanDzaky;
