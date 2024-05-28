const AdminKirimLaporanDzaky = {
  async render() {
    return `
    <!DOCTYPE html> 
    <html lang="en">
    
    <head>
    
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
    
        <title>Halaman Login</title>
    
    </head>
    
    <body class="bg-gradient-primary">
    
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-60 col-lg-6" style="background-color: transparent;">
                    <div class="card o-hidden border-0 " style="background-color: #CDE8E5; border-radius:20px; margin-top: 75px">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="p-5">
                                        <h1 class="h4 text-gray-900 mb-4">Kirim Laporan</h1>
                                        <form class="user" method="post" action="/kirimlaporan">
                                            <div class="form-group">
                                                <Label style="color:#4D869C">Gambar</Label>
                                                <input type="file" name="img" class="form-control form-control-user" style="border-radius: 20px;"
                                                    placeholder="Masukan Gambar">
                                            </div>
                                            <br>
                                            <div class="form-group">
                                                <Label style="color:#4D869C">Permasalahan</Label>
                                                <textarea id="masalah" name="masalah" class="form-control form-control-user" style="height : 100px; border-radius:20px" placeholder="Kirimkan Masalah Di Laporan"></textarea>
                                            </div>
                                            <br>
                                            <button type="submit" class="btn btn-primary btn-user btn-block" 
                                             style="border-radius: 20px; width: 550px; color: #FFFFFF; background-color: #4D869C;">Kirim Laporan</button>

                                        </form>
                                        <br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
    </body>
    
    </html>
       `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AdminKirimLaporanDzaky;
