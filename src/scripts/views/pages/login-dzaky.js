import CONFIG from '../../global/config';
import notyf from '../../global/toast-initiator';

const LoginDzaky = {
  async render() {
    localStorage.clear();
    return `
      <main class="mx-auto bg-gradient-primary col-lg-4 container row justify-content-center col-md-60 col-lg-6 card o-hidden border-0 card-body p-5" style="background-color: transparent;">
        <section class="text-center">
          <h1 class="h4 text-gray-900 mb-4 fw-bolder">Login</h1>
        </section>
        <form id="loginForm" class="user" method="post" action="/login">
          <section class="form-group">
            <label for="username" class="fw-bolder" style="color:#4D869C; margin-bottom: 3px;">Username</label>
            <input type="text" id="username" name="username" class="form-control form-control-user" style="border-radius: 13px; border: 1.4px solid #ccc;" placeholder="Masukan Username">
          </section>
          <br>
          <section class="form-group">
            <label for="password" class="fw-bolder" style="color:#4D869C; margin-bottom: 3px;">Password</label>
            <input type="password" id="password" name="password" class="form-control form-control-user" style="border-radius: 13px; border: 1.4px solid #ccc;" placeholder="Masukan Password">
          </section>
          <br>
            <button type="submit" class="btn btn-primary btn-user btn-block" style="border-radius: 20px; width: 100%; color: #FFFFFF; background-color: #4D869C;">Login</button>
        </form>
        <br>
        <section class="text-center">
          <p style="color:#000;">Belum memiliki akun? <a href="#/registrasi" style="color:#00008B; text-decoration: underline;">Silahkan daftar terlebih dahulu !!</a></p>
        </section>
        <br>
      </main>
    `;
  },

  async afterRender() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async function (event) {
      event.preventDefault();

      notyf.open({
        type: 'info',
        message: '<b>Login diproses, tunggu sebentar</b>',
      });

      const usernameInput = document.getElementById('username').value.trim();
      const passwordInput = document.getElementById('password').value.trim();

      if (usernameInput === '' || passwordInput === '') {
        notyf.open({
          type: 'error',
          duration: 7000,
          message: '<b>Username dan password harus diisi</b>',
        });
        return;
      }

      try {
        // Fetch all usernames and IDs
        const usernamesResponse = await fetch(
          `https://fuzzy-mag-bidwi-7f3836df.koyeb.app/pengguna?api_key=${CONFIG.KEY}`
        );
        if (!usernamesResponse.ok) {
          throw new Error('Failed to fetch usernames');
        }
        const usernamesData = await usernamesResponse.json();
        const userInfo = usernamesData.data.infoPengguna.find(
          (user) => user.username === usernameInput
        );

        if (!userInfo) {
          notyf.open({
            type: 'error',
            duration: 7000,
            message: '<b>Username tidak ditemukan</b>',
          });
          return;
        }

        // Fetch password for the specific ID found
        const userId = userInfo.id;
        const passwordResponse = await fetch(
          `https://fuzzy-mag-bidwi-7f3836df.koyeb.app/pengguna/${userId}?api_key=${CONFIG.KEY}`
        );
        if (!passwordResponse.ok) {
          throw new Error('Failed to fetch password');
        }
        const passwordData = await passwordResponse.json();

        // Check if password matches
        const storedPassword = passwordData.data.infoPengguna.password;
        if (passwordInput !== storedPassword) {
          notyf.open({
            type: 'error',
            duration: 7000,
            message: '<b>Password salah!</b>',
          });
          return;
        }

        // Simpan username, peran, dan noWa ke localStorage
        localStorage.setItem('username', userInfo.username);
        localStorage.setItem('peran', userInfo.peran);
        localStorage.setItem('noWa', userInfo.noWa);

        // Simpan username, peran, dan noWa ke localStorage
        localStorage.setItem('username', userInfo.username);
        localStorage.setItem('peran', userInfo.peran);
        localStorage.setItem('noWa', userInfo.noWa);

        // Login berhasil, redirect ke halaman beranda
        window.location.hash = '#/beranda';
      } catch (error) {
        console.error('Error saat login:', error);
        notyf.open({
          type: 'error',
          duration: 7000,
          message:
            '<b>Terjadi kesalahan saat proses login, coba lagi nanti.</b>',
        });
      }
    });
  },
};

export default LoginDzaky;
