const { nanoid } = require('nanoid');
const infoPengguna = require('./infoPengguna');

const getAllInformasiPengguna = (request, h) => {
  const { username, lokasi, noWa, peran } = request.query;

  let informasiParameterKueri = [...infoPengguna];

  if (username) {
    const usernameHurufKecil = username.toLowerCase();
    informasiParameterKueri = informasiParameterKueri.filter((satuInformasi) => satuInformasi.username.toLowerCase().includes(usernameHurufKecil));
  }

  if (lokasi) {
    informasiParameterKueri = informasiParameterKueri.filter((satuInformasi) => satuInformasi.lokasi.toLowerCase().includes(lokasi.toLowerCase()));
  }

  if (noWa) {
    informasiParameterKueri = informasiParameterKueri.filter((satuInformasi) => satuInformasi.noWa.includes(noWa));
  }

  if (peran) {
    informasiParameterKueri = informasiParameterKueri.filter((satuInformasi) => satuInformasi.peran.toLowerCase().includes(peran.toLowerCase()));
  }

  const balasan = h.response({
    status: 'success',
    data: {
      infoPengguna: informasiParameterKueri.map((satuInformasi) => ({
        id: satuInformasi.id,
        username: satuInformasi.username,
        lokasi: satuInformasi.lokasi,
        noWa: satuInformasi.noWa,
        peran: satuInformasi.peran,
      })),
    },
  });
  balasan.code(200);
  return balasan;
};

const deleteInformasiPenggunaDariInfoId = (request, h) => {
  const { infoId } = request.params;

  const penanda = infoPengguna.findIndex(
    (satuInformasi) => satuInformasi.id === infoId
  );

  if (penanda !== -1) {
    infoPengguna.splice(penanda, 1);
    const balasan = h.response({
      status: 'success',
      message: 'Informasi pengguna berhasil dihapus',
    });
    balasan.code(200);
    return balasan;
  }

  const balasan = h.response({
    status: 'fail',
    message: 'Informasi pengguna gagal dihapus. Id tidak ditemukan',
  });
  balasan.code(404);
  return balasan;
};

const postInformasiPengguna = (request, h) => {
  const { username, lokasi, noWa, password, peran } = request.payload;

  if (!username) {
    const balasan = h.response({
      status: 'fail',
      message: 'Gagal menambahkan informasi pengguna. Mohon isi username',
    });
    balasan.code(400);
    return balasan;
  }

  if (!noWa) {
    const balasan = h.response({
      status: 'fail',
      message: 'Gagal menambahkan informasi pengguna. Mohon isi nomor WhatsApp',
    });
    balasan.code(400);
    return balasan;
  }

  if (!password) {
    const balasan = h.response({
      status: 'fail',
      message: 'Gagal menambahkan informasi pengguna. Mohon isi password',
    });
    balasan.code(400);
    return balasan;
  }

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newInformasiPengguna = {
    id,
    username,
    lokasi,
    noWa,
    password,
    peran,
    insertedAt: createdAt,
    updatedAt,
  };

  infoPengguna.push(newInformasiPengguna);

  const isSuccess = infoPengguna.filter((satuInformasi) => satuInformasi.id === id)
    .length > 0;

  if (isSuccess) {
    const balasan = h.response({
      status: 'success',
      message: 'Informasi pengguna berhasil ditambahkan',
      data: {
        infoId: id,
      },
    });
    balasan.code(201);
    return balasan;
  }

  const balasan = h.response({
    status: 'fail',
    message: 'Informasi pengguna gagal ditambahkan',
  });
  balasan.code(500);
  return balasan;
};

const getInformasiPenggunaDariInfoId = (request, h) => {
  const { infoId } = request.params;

  const selectedInfo = infoPengguna.find(
    (satuInformasi) => satuInformasi.id === infoId
  );

  if (selectedInfo) {
    const {
      id,
      username,
      lokasi,
      noWa,
      password,
      peran,
      insertedAt,
      updatedAt,
    } = selectedInfo;

    return {
      status: 'success',
      data: {
        infoPengguna: {
          id,
          username,
          lokasi,
          noWa,
          password,
          peran,
          insertedAt,
          updatedAt,
        },
      },
    };
  }

  const balasan = h.response({
    status: 'fail',
    message: 'Informasi pengguna tidak ditemukan',
  });
  balasan.code(404);
  return balasan;
};

const putInformasiPenggunaDariId = (request, h) => {
  const { infoId } = request.params;

  const { username, lokasi, noWa, password, peran } = request.payload;

  if (!username) {
    const balasan = h.response({
      status: 'fail',
      message: 'Gagal memperbarui informasi pengguna. Mohon isi username',
    });
    balasan.code(400);
    return balasan;
  }

  if (!noWa) {
    const balasan = h.response({
      status: 'fail',
      message: 'Gagal memperbarui informasi pengguna. Mohon isi nomor WhatsApp',
    });
    balasan.code(400);
    return balasan;
  }

  if (!password) {
    const balasan = h.response({
      status: 'fail',
      message: 'Gagal memperbarui informasi pengguna. Mohon isi password',
    });
    balasan.code(400);
    return balasan;
  }

  const penanda = infoPengguna.findIndex(
    (satuInformasi) => satuInformasi.id === infoId
  );

  if (penanda === -1) {
    const balasan = h.response({
      status: 'fail',
      message: 'Gagal memperbarui informasi pengguna. Id tidak ditemukan',
    });
    balasan.code(404);
    return balasan;
  }

  const updatedAt = new Date().toISOString();
  infoPengguna[penanda] = {
    ...infoPengguna[penanda],
    username,
    lokasi,
    noWa,
    password,
    peran,
    updatedAt,
  };

  const balasan = h.response({
    status: 'success',
    message: 'Informasi pengguna berhasil diperbarui',
  });
  balasan.code(200);
  return balasan;
};

module.exports = {
  postInformasiPengguna,
  deleteInformasiPenggunaDariInfoId,
  getAllInformasiPengguna,
  putInformasiPenggunaDariId,
  getInformasiPenggunaDariInfoId,
};
