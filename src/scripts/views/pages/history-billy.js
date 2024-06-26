import { historyTemplate } from '../templates/template';
import BenahKotaSource from '../../data/benahkota-source';

import notyf from '../../global/toast-initiator';

const HistoryBilly = {
  async render() {
    notyf.success('<b>Mengambil data riwayat..</b>');
    return `
    <main class="my-4 d-flex justify-content-center">
    <section>
        <h2 class="mb-4 mt-4" style="color: #4D869C; font-weight: bold;">Riwayat Laporan</h2>
        <article id="history"></article>
    </section>
</main>
   `;
  },

  async afterRender() {
    const user = await BenahKotaSource.informasiBenahKota();
    // const pengguna = await BenahKotaSource.penggunaBenahKota();

    const historyContainer = document.querySelector('#history');
    user.forEach((userItem) => {
      historyContainer.innerHTML += historyTemplate(userItem);
    });
  },
};

export default HistoryBilly;
