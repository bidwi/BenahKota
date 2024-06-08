const { nanoid } = require('nanoid');
const informasi = require('./infoBenah');

const getAllInformasi = (request, h) => {
  const { name, reading, finished } = request.query;

  let informasiParameterKueri = [...informasi];

  if (name) {
    const nameHurufKecil = name.toLowerCase();
    informasiParameterKueri = informasiParameterKueri.filter((satuInformasi) => satuInformasi.name
      .toLowerCase()
      .includes(nameHurufKecil));
  }

  if (reading !== undefined) {
    const isReading = reading === '1';
    informasiParameterKueri = informasiParameterKueri.filter(
      (satuInformasi) => satuInformasi.reading === isReading
    );
  }

  if (finished !== undefined) {
    const isFinished = finished === '1';
    informasiParameterKueri = informasiParameterKueri.filter(
      (satuInformasi) => satuInformasi.finished === isFinished
    );
  }

  const balasan = h.response({
    status: 'success',
    data: {
      informasi: informasiParameterKueri.map((satuInformasi) => ({
        id: satuInformasi.id,
        name: satuInformasi.name,
        publisher: satuInformasi.publisher,
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
      message: 'infoBenah berhasil dihapus',
    });
    balasan.code(200);
    return balasan;
  }

  const balasan = h.response({
    status: 'fail',
    message: 'infoBenah gagal dihapus. Id tidak ditemukan',
  });
  balasan.code(404);
  return balasan;
};
const postInformasi = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (!name) {
    const balasan = h.response({
      status: 'fail',
      message: 'Gagal menambahkan infoBenah. Mohon isi nama infoBenah',
    });
    balasan.code(400);
    return balasan;
  }

  if (readPage > pageCount) {
    const balasan = h.response({
      status: 'fail',
      message:
        'Gagal menambahkan infoBenah. readPage tidak boleh lebih besar dari pageCount',
    });
    balasan.code(400);
    return balasan;
  }

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const finished = pageCount === readPage;

  const newInformasi = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt: createdAt,
    updatedAt,
  };

  informasi.push(newInformasi);

  const isSuccess = informasi.filter((satuInformasi) => satuInformasi.id === id).length > 0;

  if (isSuccess) {
    const balasan = h.response({
      status: 'success',
      message: 'infoBenah berhasil ditambahkan',
      data: {
        infoId: id,
      },
    });
    balasan.code(201);
    return balasan;
  }

  const balasan = h.response({
    status: 'fail',
    message: 'infoBenah gagal ditambahkan',
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
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      insertedAt,
      updatedAt,
    } = selectedInfo;

    return {
      status: 'success',
      data: {
        infoBenah: {
          id,
          name,
          year,
          author,
          summary,
          publisher,
          pageCount,
          readPage,
          finished,
          reading,
          insertedAt,
          updatedAt,
        },
      },
    };
  }

  const balasan = h.response({
    status: 'fail',
    message: 'infoBenah tidak ditemukan',
  });
  balasan.code(404);
  return balasan;
};

const putInformasiDariId = (request, h) => {
  const { infoId } = request.params;

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (!name) {
    const balasan = h.response({
      status: 'fail',
      message: 'Gagal memperbarui infoBenah. Mohon isi nama infoBenah',
    });
    balasan.code(400);
    return balasan;
  }

  if (readPage > pageCount) {
    const balasan = h.response({
      status: 'fail',
      message:
        'Gagal memperbarui infoBenah. readPage tidak boleh lebih besar dari pageCount',
    });
    balasan.code(400);
    return balasan;
  }

  const penanda = informasi.findIndex((satuInformasi) => satuInformasi.id === infoId);

  if (penanda === -1) {
    const balasan = h.response({
      status: 'fail',
      message: 'Gagal memperbarui infoBenah. Id tidak ditemukan',
    });
    balasan.code(404);
    return balasan;
  }

  const updatedAt = new Date().toISOString();
  informasi[penanda] = {
    ...informasi[penanda],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    updatedAt,
  };

  const balasan = h.response({
    status: 'success',
    message: 'infoBenah berhasil diperbarui',
  });
  balasan.code(200);
  return balasan;
};

module.exports = {
  // dzaky
  postInformasi,
  // billy
  deleteInformasiDariInfoId,
  getAllInformasi,
  // gesya
  putInformasiDariId,
  getInformasiDariInfoId,
};
