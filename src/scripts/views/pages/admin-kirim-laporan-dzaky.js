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
                                    <form class="user" method="post" action="/kirimlaporan" enctype="multipart/form-data">
                                        <div class="form-group">
                                            <label for="img" style="color:#4D869C">Gambar</label>
                                            <input type="file" id="img" name="img" class="form-control form-control-user" style="border-radius: 20px;" placeholder="Masukan Gambar">
                                        </div>
                                        <br>
                                        <div class="form-group">
                                            <label for="masalah" style="color:#4D869C">Permasalahan</label>
                                            <textarea id="masalah" name="masalah" class="form-control form-control-user" style="height: 100px; border-radius: 20px;" placeholder="Kirimkan Masalah Di Laporan"></textarea>
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
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AdminKirimLaporanDzaky;
