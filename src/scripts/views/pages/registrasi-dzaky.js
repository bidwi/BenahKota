const RegistrasiDzaky = {
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
    
    </head>
    
    <body class="bg-gradient-primary">
    
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-60 col-lg-6" style="background-color: transparent;">
                    <div class="card o-hidden border-0 " style="background-color: transparent;">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4"style="color:#4D869C">Registrasi</h1>
                                        </div>
                                        <form class="user" method="post" action="/registrasi">
                                            <div class="form-group">
                                                <label style="color:#4D869C">UserName</label>
                                                <input type="text" name="username" class="form-control form-control-user"
                                                    style="border-radius: 20px;" placeholder="Masukan User Name">
                                            </div>
                                            <br>
                                            <div class="form-group">
                                                <label style="color:#4D869C">Lokasi</label>
                                                <input type="text" name="Lokasi" class="form-control form-control-user"
                                                    style="border-radius: 20px;" placeholder="Lokasi">
                                            </div>
                                            <br>
                                            <div class="form-group">
                                                <label style="color:#4D869C">No Whatsapp</label>
                                                <input type="text" name="no whatsapp" class="form-control form-control-user"
                                                    style="border-radius: 20px;" placeholder="No Whatsapp">
                                            </div>
                                            <br>
                                            <div class="form-group">
                                                <label style="color:#4D869C">Password</label>
                                                <input type="text" name="password" class="form-control form-control-user"
                                                    style="border-radius: 20px;" placeholder="Masukan Password">
                                            </div>
                                            <br>
                                            <div class="form-group">
                                                <label style="color:#4D869C">Ulangi Password</label>
                                                <input type="text" name="ulangipassword" class="form-control form-control-user"
                                                    style="border-radius: 20px;" placeholder="Ulangi Password  ">
                                            </div>
                                            <br>
                                            <div class="form-group">
                                            <label for="registration">Registrasi sebagai</label>
                                            <select name="registration" id="registration" class="form-control">
                                                <option value="admin">User</option>
                                                <option value="non-admin">Admin</option>
                                            </select>
                                        </div>
                                        
                                            <br>
                                             
                                            <div style="display: flex; justify-content: space-between;">
                                                <button type="submit" class="btn btn-primary btn-user"
                                                    style="border-radius: 20px; width: 48%; color: #FFFFFF; background-color: #4D869C;">Kembali</button>
                                                <button type="submit" class="btn btn-primary btn-user"
                                                    style="border-radius: 20px; width: 48%; color: #FFFFFF; background-color: #4D869C;">Registrasi</button>
                                            </div>
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

export default RegistrasiDzaky;
