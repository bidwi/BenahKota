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
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (url === '/login' && !localStorage.getItem('username')) {
      this._content.innerHTML = await LoginDzaky.render();
      await LoginDzaky.afterRender();
      return;
    }

    if (url === '/registrasi' && !localStorage.getItem('username')) {
      this._content.innerHTML = await RegistrasiDzaky.render();
      await RegistrasiDzaky.afterRender();
      return;
    }

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
      return { hasAccess: false, redirectTo: '/login' };
    }

    if (peran === 'User') {
      if (adminPaths.includes(url)) {
        return { hasAccess: false, redirectTo: '/login' };
      }
    } else if (peran === 'admin' || peran === 'Admin') {
      if (!adminPaths.includes(url)) {
        return { hasAccess: false, redirectTo: '/admin-pengguna' };
      }
    }

    return { hasAccess: true, redirectTo: null };
  }
}

export default App;
