import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import App from './views/app';

const app = new App({
  button: document.querySelector('.navbar-toggler'),
  drawer: document.querySelector('.navbar-nav'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
