const Hapi = require('@hapi/hapi');
const routes = require('./routes-infoBenah');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8000,
    // hapus localhost
    host: process.env.HOST || 'localhost' || '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server udah jalan, coba aja cek ${server.info.uri}/informasi`);
};

init();
