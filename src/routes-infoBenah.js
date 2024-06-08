const {
  getInformasiDariInfoId,
  putInformasiDariId,
  postInformasi,
  getAllInformasi,
  deleteInformasiDariInfoId,
} = require('./handler-infoBenah');

const routes = [
  {
    method: 'DELETE',
    path: '/informasi/{infoId}',
    handler: deleteInformasiDariInfoId,
  },
  {
    method: 'GET',
    path: '/informasi',
    handler: getAllInformasi,
  },
  {
    method: 'POST',
    path: '/informasi',
    handler: postInformasi,
  },
  {
    method: 'GET',
    path: '/informasi/{infoId}',
    handler: getInformasiDariInfoId,
  },
  {
    method: 'PUT',
    path: '/informasi/{infoId}',
    handler: putInformasiDariId,
  },
];

module.exports = routes;
