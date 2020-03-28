const config = {
  app: {
    host: process.env.app_host || 'localhost',
    port: process.env.app_port || '3000',
  }
};

module.exports = config;
