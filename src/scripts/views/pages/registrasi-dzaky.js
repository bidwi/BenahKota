import notyf from '../../global/toast-initiator';
import CONFIG from '../../global/config';

const RegistrasiDzaky = {
  async render() {
    return `
        <main class="mx-auto bg-gradient-primary col-lg-4 container row justify-content-center col-md-60 col-lg-6 card o-hidden border-0 card-body p-5" style="background-color: transparent;">
          <section class="text-center">
            <h1 class="h4 text-gray-900 mb-4 fw-bolder">Registrasi</h1>
          </section>
          <form id="registerForm" class="user">
            <section class="form-group">
              <label for="username" style="color:#4D869C; margin-left: 0.5rem; margin-bottom: 3px; font-weight: bolder;">Username</label>
              <input type="text" id="username" minlength="6" name="username" required pattern=".{6,}" class="form-control form-control-user" style="border-radius: 13px; border: 1.4px solid #ccc;" placeholder="Arjuna" required>
              <div class="form-text text-body-secondary" style="margin-left: 0.8rem; font-size: 14px;" id="basic-addon4">Minimal 6 karakter</div>
            </section>
            <br>
            <section class="form-group" style="margin-top: -0.7rem;">
              <label for="lokasi" style="color:#4D869C; margin-left: 0.5rem; margin-bottom: 3px; font-weight: bolder;">Lokasi</label>
              <input type="text" id="lokasi" minlength="4" name="lokasi" class="form-control form-control-user" style="border-radius: 13px; border: 1.4px solid #ccc;" placeholder="Palu" required>
              <div class="form-text text-body-secondary" style="margin-left: 0.8rem; font-size: 14px;" id="basic-addon4">Minimal 4 karakter</div>
              </section>
            <br>
            <section class="form-group" style="margin-top: -0.7rem;">
              <label for="noWa" style="color:#4D869C; margin-left: 0.5rem; margin-bottom: 3px; font-weight: bolder;">No Whatsapp</label>
              <input type="text" id="noWa" minlength="9" name="noWa" pattern="\\d*" class="form-control form-control-user" style="border-radius: 13px; border: 1.4px solid #ccc;" placeholder="0812334567" required>
              <div class="form-text text-body-secondary" style="margin-left: 0.8rem; font-size: 14px;" id="basic-addon4">Minimal 9 karakter, hanya angka</div>
              </section>
            <br>
            <section class="form-group" style="margin-top: -0.7rem;">
              <label for="password" style="color:#4D869C; margin-left: 0.5rem; margin-bottom: 3px; font-weight: bolder;">Password</label>
              <input type="password" minlength="6" id="password" name="password" class="form-control form-control-user" style="border-radius: 13px; border: 1.4px solid #ccc;" placeholder="secr3t" required>
              <div class="form-text text-body-secondary" style="margin-left: 0.8rem; font-size: 14px;" id="basic-addon4">Minimal 6 karakter</div>
              </section>
            <br>
            <section class="form-group" style="margin-top: -0.7rem;">
              <label for="ulangipassword" style="color:#4D869C; margin-left: 0.5rem; margin-bottom: 3px; font-weight: bolder;">Ulangi Password</label>
              <input type="password" minlength="6" id="ulangipassword" name="ulangipassword" class="form-control form-control-user" style="border-radius: 13px; border: 1.4px solid #ccc;" placeholder="secr3t" required>
              <div class="form-text text-body-secondary" style="margin-left: 0.8rem; font-size: 14px;" id="basic-addon4">Minimal 6 karakter</div>
              </section>
            <br>
            <section class="form-group" style="margin-left: 0.5rem; margin-top: -0.7rem;">
              <label for="peran" style="color:#4D869C; font-weight: bolder; margin-bottom: 3px;">Registrasi sebagai</label>
              <select id="peran" name="peran" class="form-control rounded-3" style="border-radius: 13px; border: 1.4px solid #ccc;" required>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="pembenah">Pembenah</option>
              </select>
            </section>
            <br>
            <button type="submit" id="btnRegistrasi" class="btn btn-primary btn-user btn-block" style="border-radius: 13px; border: 1.4px solid #ccc;; margin-top: 1rem; width: 100%; color: #FFFFFF; background-color: #4D869C;">Registrasi</button>
          </form>
          <br>
          <section class="text-center">
            <p style="color:#000;">Sudah memiliki akun? <a href="#/login" style="color:#00008B; text-decoration: underline;">Silahkan login !!</a></p>
          </section>
          <br>
        </main>
      `;
  },

  async afterRender() {
    const btnRegistrasi = document.getElementById('btnRegistrasi');

    const noWaInput = document.getElementById('noWa');
    noWaInput.addEventListener('input', (event) => {
      const input = event.target;
      const value = input.value;
      const sanitizedValue = value.replace(/\D/g, '');
      if (sanitizedValue !== value) {
        input.value = sanitizedValue;
      }
    });

    btnRegistrasi.addEventListener('click', async (event) => {
      event.preventDefault();

      notyf.open({
        type: 'info',
        message: '<b>Registrasi diproses, tunggu sebentar</b>',
      });

      const username = document.getElementById('username').value;
      const lokasi = document.getElementById('lokasi').value;
      const noWa = document.getElementById('noWa').value;
      const password = document.getElementById('password').value;
      const ulangipassword = document.getElementById('ulangipassword').value;
      const peran = document.getElementById('peran').value;

      if (
        username.length < 6 ||
        lokasi.length < 4 ||
        noWa.length < 9 ||
        password.length < 6 ||
        ulangipassword.length < 6
      ) {
        notyf.open({
          type: 'error',
          duration: 7000,
          message:
            '<b>Pastikan data diisi dengan minimal karakter yang sesuai.</b>',
        });
        return;
      }

      if (password !== ulangipassword) {
        notyf.open({
          type: 'error',
          duration: 7000,
          message: '<b>Password dan Ulangi Password harus sama!</b>',
        });
        return;
      }

      try {
        const response = await fetch(
          `https://fuzzy-mag-bidwi-7f3836df.koyeb.app/pengguna?api_key=${CONFIG.KEY}`
        );
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(
            responseData.message ||
              'Gagal memeriksa ketersediaan username dan noWa.'
          );
        }

        const existingUser = responseData.data.infoPengguna.find(
          (user) => user.username === username || user.noWa === noWa
        );
        if (existingUser) {
          notyf.open({
            type: 'error',
            duration: 7000,
            message:
              '<b>Username/No. Whatsapp sudah terdaftar, coba yang lain</b>',
          });
          return;
        }

        const payload = {
          username,
          lokasi,
          noWa,
          password,
          peran,
        };

        const registerResponse = await fetch(
          `https://fuzzy-mag-bidwi-7f3836df.koyeb.app/pengguna?api_key=${CONFIG.KEY}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          }
        );

        const registerData = await registerResponse.json();
        if (registerResponse.ok) {
          notyf.open({
            type: 'success',
            duration: 7000,
            message: '<b>Registrasi berhasil!</b>',
          });
          localStorage.setItem('UserId', registerData.data.infoId);
          window.location.href = '#/login';
        } else {
          console.error('Registrasi gagal:', registerData);
          notyf.open({
            type: 'error',
            duration: 7000,
            message: `<b>Registrasi gagal: ${registerData.message}</b>`,
          });
        }
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
        notyf.open({
          type: 'error',
          duration: 7000,
          message: '<b>Terjadi kesalahan. Silakan coba lagi.</b>',
        });
      }
    });
  },
};

export default RegistrasiDzaky;
