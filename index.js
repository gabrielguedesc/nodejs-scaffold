const app = require('./src/app');
const config = require('./src/config');

// eslint-disable-next-line no-console
app.listen(config.port, () => console.log(`App run in ${config.port} port.`));
