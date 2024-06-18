import CONFIG from './config';

const API_ENDPOINT = {
  INFORMASI: `${CONFIG.BASE_URL}informasi?api_key=${CONFIG.KEY}`,
  PENGGUNA: `${CONFIG.BASE_URL}pengguna?api_key=${CONFIG.KEY}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}pengguna/${id}?api_key=${CONFIG.KEY}`,
  DETAIL_INFORMASI: (id) =>
    `${CONFIG.BASE_URL}informasi/${id}?api_key=${CONFIG.KEY}`,
};

export default API_ENDPOINT;
