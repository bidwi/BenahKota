const LaporGesya = {
  async render() {
    return `
    <div class="lapor-container container m-5">
      <h2 class="mb-4 fs-1 fw-bold">Form Pelaporan Kerusakan Lingkungan</h2>
      <div class="form-lapor-container">
        <form class="row g-3">
          <div class="mb-3">
            <label for="formFile" class="form-label">Gambar</label>
            <input class="form-control" type="file" id="formFile">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Lokasi</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Jalan Soekarno Hatta no.150">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Deskripsi Permasalahan</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="col-12">
            <button class="btn btn-lg text-light" type="submit" style="background-color:#4D869C;">Submit Form</button>
          </div>
        </form>
      </div> 
    </div>
   `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default LaporGesya;
