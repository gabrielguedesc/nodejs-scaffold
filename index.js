const app = require('./src/app');
const config = require('./src/config');
const logger = require('./src/log');

app.listen(config.port, () => {
  console.log(`App run in ${config.port} port.`)
  logger.info(`App run in ${config.port} port.`)
});

