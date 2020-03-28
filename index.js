const app = require('./src/app');
const config = require('./src/config');

app.listen(config.app.port, 
  () => console.log(`App run in ${config.app.port} port.`));
