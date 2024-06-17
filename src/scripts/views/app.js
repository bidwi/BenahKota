import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import LoginDzaky from './pages/login-dzaky';
import RegistrasiDzaky from './pages/registrasi-dzaky';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // Inisiasi komponen lain jika diperlukan
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    // Penanganan khusus untuk halaman login
    if (url === '/login' && !localStorage.getItem('username')) {
      this._content.innerHTML = await LoginDzaky.render();
      await LoginDzaky.afterRender();
      return;
    }

    // Penanganan khusus untuk halaman registrasi
    if (url === '/registrasi' && !localStorage.getItem('username')) {
      this._content.innerHTML = await RegistrasiDzaky.render();
      await RegistrasiDzaky.afterRender();
      return;
    }

    // Middleware untuk pengecekan peran
    const accessCheck = App._checkAccess(url);
    if (!accessCheck.hasAccess) {
      window.location.hash = accessCheck.redirectTo;
      return;
    }

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }

  static _checkAccess(url) {
    const peran = localStorage.getItem('peran');
    const adminPaths = [
      '/admin-pengguna',
      '/admin-laporan',
      '/admin-kirim-laporan',
      '/login',
    ];

    if (!peran) {
      // Jika tidak ada peran (belum login), redirect ke halaman login
      return { hasAccess: false, redirectTo: '/login' };
    }

    if (peran === 'User') {
      // Pengguna dengan peran User tidak boleh mengakses halaman admin
      if (adminPaths.includes(url)) {
        return { hasAccess: false, redirectTo: '/login' };
      }
    } else if (peran === 'admin' || peran === 'Admin') {
      // Pengguna dengan peran admin hanya boleh mengakses halaman admin
      if (!adminPaths.includes(url)) {
        return { hasAccess: false, redirectTo: '/admin-pengguna' };
      }
    }

    return { hasAccess: true, redirectTo: null };
  }
}

export default App;
