import API_ENDPOINT from '../../global/api-endpoint';
import notyf from '../../global/toast-initiator';

const AdminKirimLaporanDzaky = {
  async render() {
    return `
    <main class="bg-gradient-primary mb-5">
      <main class="container">
        <div class="row justify-content-center">
          <div class="col-md-60 col-lg-6">
            <section class="card o-hidden border-0" style="background-color: #CDE8E5; border-radius: 20px; margin-top: 75px;">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-12">
                    <article class="p-5">
                      <header>
                        <h1 class="h4 text-gray-900 mb-4 fw-bold">Kirim Laporan</h1>
                      </header>
                      <form id="laporanForm" class="user" method="post" action="/kirimlaporan" enctype="multipart/form-data">
                        <div class="mb-3">
                          <label for="id" class="form-label">ID Laporan</label>
                          <input type="text" class="form-control rounded-5" id="id" placeholder="Masukkan ID" required>
                          <button type="button" id="fetchDataBtn" class="btn btn-secondary mt-2">Ambil Data</button>
                        </div>
                        <div class="mb-3">
                          <label for="username" class="form-label">Username</label>
                          <input type="text" class="form-control rounded-5" id="username" placeholder="Username" readonly>
                        </div>
                        <div class="mb-3">
                          <label for="lokasi" class="form-label">Lokasi</label>
                          <input type="text" class="form-control rounded-5" id="lokasi" placeholder="Lokasi" readonly>
                        </div>
                        <div class="form-group">
                          <label for="img" style="color:#4D869C">Gambar</label>
                          <input type="file" id="img" name="img" class="form-control form-control-user" style="border-radius: 20px;" placeholder="Masukan Gambar">
                        </div>
                        <br>
                        <div class="form-group">
                          <label for="deskripsi" style="color:#4D869C">Deskripsi Perbaikan</label>
                          <textarea id="deskripsi" name="deskripsi" class="form-control form-control-user" style="height: 100px; border-radius: 20px;" placeholder="Deskripsi Perbaikan"></textarea>
                        </div>
                        <br>
                        <div style="display: flex; justify-content: center;">
                          <button type="submit" class="btn btn-primary btn-user btn-block" style="border-radius: 20px; width: 550px; color: #FFFFFF; background-color: #4D869C;">Kirim Laporan</button>
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
        lokasiInput.value = laporan.lokasiBenah || '';
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
      const deskripsiPerbaikan = document.getElementById('deskripsi').value.trim();
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
          id,
          gambar: base64Img,
          username,
          lokasi,
          deskripsi: deskripsiPerbaikan,
          status: 'selesai' // Tambahkan status 'selesai' ke dalam payload
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
      } catch (error) {
        console.error('Error submitting form:', error);
        notyf.open({
          type: 'error',
          message: error.message || 'Terjadi kesalahan saat mengirim laporan!',
        });
      }
    });
  },
};

export default AdminKirimLaporanDzaky;
