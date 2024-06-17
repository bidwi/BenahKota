import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const LandingPageGesya = {
  async render() {
    return `
    <header class="hero d-flex align-items-center justify-content-between ps-5 py-5" style="margin-bottom:80px; margin-top:10px;">
        <div class="hero-content-container w-50">
            <h1 class="fw-bold pb-4" style="color:#4D869C; font-size:70px">Selamat Datang di Benah Kota!</h1>
            <p class="fs-6 fw-normal pb-3" style="color:#4D869C;">Benah Kota merupakan platform terpadu untuk meningkatkan kesadaran dan partisipasi masyarakat dalam menjaga kelestarian lingkungan dan fasilitas kota. Di sini, Anda bisa melaporkan kerusakan fasilitas umum, mengikuti tantangan ramah lingkungan, mendukung proyek komunitas, dan mengakses informasi real-time tentang kondisi lingkungan sekitar Anda.</p>
            <div class="d-flex gap-3">
              <a href="#" class="btn btn-success btn-lg bg-light rounded-5 pt-2 pb-2 ps-4 pe-4 fs-5 fw-medium" style="color:#4D869C;">Lihat Permasalahan <i class="bi bi-eye ps-1"></i></a>
              <a href="/#/lapor" class="btn btn-success btn-lg rounded-5 pt-2 pb-2 ps-4 pe-4 fs-5 fw-medium" style="background-color:#4D869C;">Lapor Sekarang! <i class="bi bi-flag-fill ps-1"></i></i></a>
            </div>
        </div>
        <div class="hero-image-container d-flex align-items-center justify-content-center w-50">
          <img class="hero-image h-75 w-75 rounded-5 lazyload" data-src="../../images/kota3.jpg">

        </div>
    </header>

  <div class="strength-container m-5" style="height:80vh;">
    <div class="title-container p-4">
        <h1 class=" title-text fw-bold text-center fs-1" style="color:#4D869C;">Keunggulan Kami</h1>
    </div>
    <div class="card-container d-flex flex-wrap">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card border-0 shadow-lg rounded-4 h-100">
            <div class="image-container rounded-circle overflow-hidden mx-auto my-3" style="width: 150px; height: 150px; background-color:#4D869C;">
              <img data-src="../../images/deadline.png" class="card-img-top w-100 h-100 lazyload" alt="gambar-waktu" style="object-fit: cover;">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center fs-4 fw-semibold pb-2" style="color:#4D869C;">Cepat dan Responsif</h5>
              <p class="card-text text-center" style="color:#4D869C;">Laporkan kerusakan fasilitas kota dan dapatkan tanggapan yang cepat serta solusi yang efisien dari pihak berwenang.</p>
            </div>
          </div>  
        </div>
        <div class="col">
          <div class="card border-0 shadow-lg rounded-4 h-100">
            <div class="image-container rounded-circle overflow-hidden mx-auto my-3" style="width: 150px; height: 150px; background-color:#4D869C;">
              <img data-src="../../images/collaboration.png" class="card-img-top w-100 h-100 p-3 lazyload" alt="gambar-waktu" style="object-fit: cover;">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center fs-4 fw-semibold pb-2" style="color:#4D869C;">Kolaborasi Multi-Stakeholder</h5>
              <p class="card-text text-center" style="color:#4D869C;">Kerjasama antara masyarakat, pemerintah, dan organisasi untuk solusi efektif terhadap upaya pelestarian lingkungan.</p>
            </div>
          </div>  
        </div>
        <div class="col">
          <div class="card border-0 shadow-lg rounded-4 h-100">
            <div class="image-container rounded-circle overflow-hidden mx-auto my-3" style="width: 150px; height: 150px; background-color:#4D869C;">
              <img data-src="../../images/real-time.png" class="card-img-top w-100 h-100 p-3 lazyload" alt="gambar-waktu" style="object-fit: cover;">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center fs-4 fw-semibold pb-2" style="color:#4D869C;">Data Real-Time</h5>
              <p class="card-text text-center" style="color:#4D869C;">Status dan perkembangan laporan kerusakan fasilitas kota dapat dilihat secara real-time dan transparan.</p>
            </div>
          </div>  
        </div>
        <div class="col">
          <div class="card border-0 shadow-lg rounded-4 h-100">
            <div class="image-container rounded-circle overflow-hidden mx-auto my-3" style="width: 150px; height: 150px; background-color:#4D869C;">
              <img data-src="../../images/quality-of-life.png" class="card-img-top w-100 h-100 p-3 lazyload" alt="gambar-waktu" style="object-fit: cover;">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center fs-4 fw-semibold pb-2" style="color:#4D869C;">Peningkatan Kualitas Hidup</h5>
              <p class="card-text text-center" style="color:#4D869C;">Berkontribusi langsung pada peningkatan kualitas hidup, kesehatan, dan kesejahteraan masyarakat.</p>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>

  <div class="story-containerer d-flex justify-content-center mx-5 mb-5">
    <img data-src="../../images/damaged-road-2.jpg" class="img-fluid h-50 w-50 rounded-start-1 shadow-lg mb-5 bg-body-tertiary rounded lazyload" alt="...">
    <div class="story-content rounded-end-1 p-4" style="background-color:#4D869C">
      <h2 class="text-light fw-bold fs-1 pb-4 pt-3 ">Cerita Kami</h2>
      <p class="text-light text-start fw-normal pb-4 fs-5 fst-italic">"Benah Kota lahir dari keprihatinan kami terhadap kondisi lingkungan dan fasilitas umum di kota yang sering kali mengalami kerusakan tanpa perhatian yang memadai. Oleh karena itu, kami menciptakan platform ini untuk memberdayakan masyarakat dalam melaporkan kerusakan fasilitas kota dan meningkatkan kesadaran akan pentingnya menjaga kelestarian lingkungan."</p>
      <p class="text-light text-start fw-normal fs-5 fst-italic fw-semibold">Gesya Reihan, CEO of Benah Kota</p>
    </div>
  </div>
  
  

  <div class="problem-container my-4">
    <div class="title-container p-4"> 
      <h1 class=" title-text fw-bold text-center fs-1" style="color:#4D869C;">Permasalahan yang Sudah Selesai </h1>
    </div>

    <div class="row row-cols-1 row-cols-md-4 g-4 p-4">
      <div class="col">
        <div class="card h-100">
          <img data-src="../../images/damaged-road-2.jpg" class="card-img-top lazyload" alt="...">
          <div class="card-body">
            <h5 class="card-title" style="color:#4D869C;">Lorem ipsum dolor sit amet</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img data-src="../../images/damaged-road-2.jpg" class="card-img-top lazyload" alt="...">
          <div class="card-body">
            <h5 class="card-title" style="color:#4D869C;">Lorem ipsum dolor sit amet</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img data-src="../../images/damaged-road-2.jpg" class="card-img-top lazyload" alt="...">
          <div class="card-body">
            <h5 class="card-title" style="color:#4D869C;">Lorem ipsum dolor sit amet</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img data-src="../../images/damaged-road-2.jpg" class="card-img-top lazyload" alt="...">
          <div class="card-body">
            <h5 class="card-title" style="color:#4D869C;">Lorem ipsum dolor sit amet</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="detail-problem-container d-flex justify-content-end"> 
      <a href="#" class="pt-2 pb-2 ps-4 pe-4 fs-6 fw-semibold me-5" style="color:#4D869C; text-decoration:none;">Lihat Selengkapnya <i class="bi bi-arrow-right ps-1"></i></a>
    </div>
  </div>

  <div class="contact-container d-flex justify-content-around m-5">
    <div class="contact-content rounded-start-4 rounded-end-4 p-4" style="background-color:#4D869C; width:35%;">
      <div class="contact-content-title d-flex justify-content-center">
        <h2 class="text-light fw-bold fs-1 pb-4 pt-5 ">Kontak Kami</h2>
      </div>
      <div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-light">Nama</label>
          <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="cth: jajang">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-light">Alamat Email</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nama@gmail.com">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label text-light">Pesan</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="col-auto mt-4 d-flex justify-content-around">
          <button type="submit" class="btn btn-light btn-md mb-3 w-25 ms-2 fw-medium" style="color:#4D869C;">Submit</button>
        </div>
      </div>
    </div>

  <img data-src="../../images/contact.svg" class="img-fluid w-50 lazyload" alt="...">
  </div>
   `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default LandingPageGesya;
