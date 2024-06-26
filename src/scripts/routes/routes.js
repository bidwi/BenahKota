import AdminKirimLaporanDzaky from '../views/pages/admin-kirim-laporan-dzaky';
import AdminLaporanGesya from '../views/pages/admin-laporan-gesya';
import AdminPenggunaBilly from '../views/pages/admin-pengguna-billy';
import BerandaBilly from '../views/pages/beranda-billy';
import HistoryBilly from '../views/pages/history-billy';
import LandingPageGesya from '../views/pages/landing-page-gesya';
import LaporGesya from '../views/pages/lapor-gesya';
import LoginDzaky from '../views/pages/login-dzaky';
import RegistrasiDzaky from '../views/pages/registrasi-dzaky';

const routes = {
  '/': LandingPageGesya,
  '/landing-page': LandingPageGesya,
  '/admin-kirim-laporan': AdminKirimLaporanDzaky,
  '/admin-laporan': AdminLaporanGesya,
  '/admin-pengguna': AdminPenggunaBilly,
  '/beranda': BerandaBilly,
  '/history': HistoryBilly,
  '/lapor': LaporGesya,
  '/login': LoginDzaky,
  '/registrasi': RegistrasiDzaky,
};

export default routes;
