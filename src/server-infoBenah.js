const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv');
const routes = require('./routes-infoBenah');
const routesPengguna = require('./routes-infoPengguna');

dotenv.config();

const validateApiKey = (request, h) => {
  const apiKey = request.query.api_key || request.headers['api-key'];
  console.log('Received API Key:', apiKey);
  console.log('Expected API Key:', process.env.API_KEY);
  if (apiKey !== process.env.API_KEY) {
    return h.response({ status: 'fail', message: 'API key salah' }).code(401).takeover();
  }
  return h.continue;
};

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8000,
    host: process.env.HOST || '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.ext('onPreHandler', validateApiKey);

  server.route(routes);
  server.route(routesPengguna);

  await server.start();
  console.log(`Server udah jalan, coba aja cek ${server.info.uri}/informasi dan ${server.info.uri}/pengguna`);
};

init();
