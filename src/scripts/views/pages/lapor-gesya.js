import API_ENDPOINT from '../../global/api-endpoint';
import notyf from '../../global/toast-initiator';

const LaporGesya = {
  async render() {
    return `
    <div class="lapor-container container m-5">
      <h2 class="mb-4 fs-1 fw-bold" style="color:#4D869C;">Lapor Infrastruktur Rusak</h2>
      <div class="form-lapor-container">
        <form id="laporForm" class="row g-3">
          <div class="mb-3">
            <label for="formFile" class="form-label fw-bolder">Gambar (Maksimal 4MB)</label>
            <input class="form-control" style="width: 100%; margin: auto; border-radius: 13px; border: 1.4px solid #ccc;" accept="image/png, image/gif, image/jpeg" type="file" id="formFile" required>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label fw-bolder">Lokasi</label>
            <input type="text" class="form-control" style="width: 100%; margin: auto; border-radius: 13px; border: 1.4px solid #ccc;" id="exampleFormControlInput1" placeholder="contoh : Jalan Soekarno Hatta no.150" required>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label fw-bolder">Deskripsi Permasalahan</label>
            <textarea class="form-control" style="width: 100%; margin: auto; border-radius: 13px; border: 1.4px solid #ccc;" id="exampleFormControlTextarea1" rows="3" required></textarea>
          </div>
          <div class="col-12">
            <button class="btn btn-lg text-light fw-bolder" type="submit" style="background-color:#4D869C;">Submit Form</button>
          </div>
        </form>
      </div> 
    </div>
    `;
  },

  async afterRender() {
    const form = document.getElementById('laporForm');

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    const compressImage = (file, quality = 0.7) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          const img = new Image();
          img.src = event.target.result;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(
              (blob) => {
                resolve(blob);
              },
              'image/jpeg',
              quality
            );
          };
          img.onerror = (error) => {
            reject(error);
          };
        };
        reader.onerror = (error) => {
          reject(error);
        };
      });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formFile = document.getElementById('formFile').files[0];
      const lokasi = document.getElementById('exampleFormControlInput1').value;
      const deskripsi = document.getElementById(
        'exampleFormControlTextarea1'
      ).value;
      const username = localStorage.getItem('username');

      if (!formFile || !lokasi || !deskripsi || !username) {
        notyf.open({
          type: 'error',
          message: '<b>Semua field harus diisi!</b>',
        });
        return;
      }

      const maxFileSizeMB = 4;
      const maxFileSizeBytes = maxFileSizeMB * 1024 * 1024;
      if (formFile.size > maxFileSizeBytes) {
        notyf.open({
          type: 'error',
          message: '<b>Ukuran file tidak boleh lebih dari 4,00 MB!</b>',
        });
        return;
      }

      notyf.open({
        type: 'info',
        message: '<b>Sedang diproses, tunggu sebentar</b>',
      });

      try {
        const compressedFile = await compressImage(formFile);
        const base64File = await toBase64(compressedFile);

        const payload = {
          username,
          gambar: base64File,
          deskripsi,
          lokasiBenah: lokasi,
          status: false,
        };

        const response = await fetch(API_ENDPOINT.INFORMASI, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const responseData = await response.json();
        if (response.ok) {
          notyf.open({
            type: 'success',
            duration: 7000,
            message: '<b>Laporan Berhasil dikirim</b>',
          });
          window.location.href = '#/beranda';
          setTimeout(() => {
            window.location.reload();
          }, 500);
        } else {
          notyf.open({
            type: 'error',
            message: `Gagal mengirim laporan: ${responseData.message}`,
          });
        }
      } catch (error) {
        notyf.open({
          type: 'error',
          message: 'Terjadi kesalahan. Silakan coba lagi.',
        });
      }
    });
  },
};

export default LaporGesya;
