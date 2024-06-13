const {
  getInformasiPenggunaDariInfoId,
  putInformasiPenggunaDariId,
  postInformasiPengguna,
  getAllInformasiPengguna,
  deleteInformasiPenggunaDariInfoId,
} = require('./handler-infoPengguna');

const routesPengguna = [
  {
    method: 'DELETE',
    path: '/pengguna/{infoId}',
    handler: deleteInformasiPenggunaDariInfoId,
  },
  {
    method: 'GET',
    path: '/pengguna',
    handler: getAllInformasiPengguna,
  },
  {
    method: 'POST',
    path: '/pengguna',
    handler: postInformasiPengguna,
  },
  {
    method: 'GET',
    path: '/pengguna/{infoId}',
    handler: getInformasiPenggunaDariInfoId,
  },
  {
    method: 'PUT',
    path: '/pengguna/{infoId}',
    handler: putInformasiPenggunaDariId,
  },
];

module.exports = routesPengguna;
