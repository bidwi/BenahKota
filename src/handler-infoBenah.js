const { nanoid } = require('nanoid');
const informasi = require('./infoBenah');

const getAllInformasi = (request, h) => {
  const { username, status } = request.query;

  let informasiParameterKueri = [...informasi];

  if (username) {
    const usernameHurufKecil = username.toLowerCase();
    informasiParameterKueri = informasiParameterKueri.filter((satuInformasi) => satuInformasi.username
      .toLowerCase()
      .includes(usernameHurufKecil));
  }

  if (status !== undefined) {
    const isStatus = status === '1';
    informasiParameterKueri = informasiParameterKueri.filter(
      (satuInformasi) => satuInformasi.status === isStatus
    );
  }

  const balasan = h.response({
    status: 'success',
    data: {
      informasi: informasiParameterKueri.map((satuInformasi) => ({
        id: satuInformasi.id,
        username: satuInformasi.username,
        // gambar: satuInformasi.gambar,
        deskripsi: satuInformasi.deskripsi,
        lokasiBenah: satuInformasi.lokasiBenah,
      })),
    },
  });
  balasan.code(200);
  return balasan;
};

const deleteInformasiDariInfoId = (request, h) => {
  const { infoId } = request.params;

  const penanda = informasi.findIndex((satuInformasi) => satuInformasi.id === infoId);

  if (penanda !== -1) {
    informasi.splice(penanda, 1);
    const balasan = h.response({
      status: 'success',
      message: 'Informasi berhasil dihapus',
    });
    balasan.code(200);
    return balasan;
  }

  const balasan = h.response({
    status: 'fail',
    message: 'Informasi gagal dihapus. Id tidak ditemukan',
  });
  balasan.code(404);
  return balasan;
};

const postInformasi = (request, h) => {
  const {
    username,
    gambar,
    deskripsi,
    lokasiBenah,
    status,
  } = request.payload;

  if (!username) {
    const balasan = h.response({
      status: 'fail',
      message: 'Gagal menambahkan informasi. Mohon isi username',
    });
    balasan.code(400);
    return balasan;
  }

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newInformasi = {
    id,
    username,
    gambar,
    deskripsi,
    lokasiBenah,
    status,
    insertedAt: createdAt,
    updatedAt,
  };

  informasi.push(newInformasi);

  const isSuccess = informasi.filter((satuInformasi) => satuInformasi.id === id).length > 0;

  if (isSuccess) {
    const balasan = h.response({
      status: 'success',
      message: 'Informasi berhasil ditambahkan',
      data: {
        infoId: id,
      },
    });
    balasan.code(201);
    return balasan;
  }

  const balasan = h.response({
    status: 'fail',
    message: 'Informasi gagal ditambahkan',
  });
  balasan.code(500);
  return balasan;
};

const getInformasiDariInfoId = (request, h) => {
  const { infoId } = request.params;

  const selectedInfo = informasi.find((satuInformasi) => satuInformasi.id === infoId);

  if (selectedInfo) {
    const {
      id,
      username,
      deskripsi,
      lokasiBenah,
      status,
      insertedAt,
      updatedAt,
      gambar,
    } = selectedInfo;

    return {
      status: 'success',
      data: {
        infoBenah: {
          id,
          username,
          deskripsi,
          lokasiBenah,
          status,
          insertedAt,
          updatedAt,
          gambar,
        },
      },
    };
  }

  const balasan = h.response({
    status: 'fail',
    message: 'Informasi tidak ditemukan',
  });
  balasan.code(404);
  return balasan;
};

const putInformasiDariId = (request, h) => {
  const { infoId } = request.params;

  const {
    username,
    gambar,
    deskripsi,
    lokasiBenah,
    status,
  } = request.payload;

  if (!username) {
    const balasan = h.response({
      status: 'fail',
      message: 'Gagal memperbarui informasi. Mohon isi username',
    });
    balasan.code(400);
    return balasan;
  }

  const penanda = informasi.findIndex((satuInformasi) => satuInformasi.id === infoId);

  if (penanda === -1) {
    const balasan = h.response({
      status: 'fail',
      message: 'Gagal memperbarui informasi. Id tidak ditemukan',
    });
    balasan.code(404);
    return balasan;
  }

  const updatedAt = new Date().toISOString();
  informasi[penanda] = {
    ...informasi[penanda],
    username,
    gambar,
    deskripsi,
    lokasiBenah,
    status,
    updatedAt,
  };

  const balasan = h.response({
    status: 'success',
    message: 'Informasi berhasil diperbarui',
  });
  balasan.code(200);
  return balasan;
};

module.exports = {
  postInformasi,
  deleteInformasiDariInfoId,
  getAllInformasi,
  putInformasiDariId,
  getInformasiDariInfoId,
};
