const LoginDzaky = {
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
                    <div class="card o-hidden border-0 " style="background-color: transparent;">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Login</h1>
                                        </div>
                                        <form class="user" method="post" action="/login">
                                            <div class="form-group">
                                                <Label style="color:#4D869C">UserName</Label>
                                                <input type="text" name="username" class="form-control form-control-user" style="border-radius: 20px;"
                                                    placeholder="Masukan User Name">
                                            </div>
                                            <br>
                                            <div class="form-group">
                                                <Label style="color:#4D869C">Password</Label>
                                                <input type="password" name="password" class="form-control form-control-user" style="border-radius: 20px;"
                                                    placeholder="Masukan Password">
                                            </div>
                                            <br>
                                            <button type="submit" class="btn btn-primary btn-user btn-block" 
                                             style="border-radius: 20px; width: 550px; color: #FFFFFF; background-color: #4D869C;">Login</button>

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
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Lakukan tindakan login, misalnya memanggil API atau validasi
      console.log('Email:', email);
      console.log('Password:', password);
      
      // Contoh: Panggil API login
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ email, password })
      // });

      // if (response.ok) {
      //   const result = await response.json();
      //   console.log('Login berhasil:', result);
      // } else {
      //   console.error('Login gagal');
      // }
    });
  },
};

export default LoginDzaky;
