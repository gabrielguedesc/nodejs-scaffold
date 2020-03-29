const dotenv = require('dotenv');
const convict = require('convict');

dotenv.config();

const config = convict({
  env: {
    format: ['prod','dev','test'],
    default: 'dev',
    env: 'ENV'
  },
  port: {
    format: 'port',
    default: 8000,
    env: "PORT"
  }
});

const env = config.get('env');

config.loadFile(`./src/config/${env}.json`);
config.validate({ strict: true });

module.exports = config.getProperties();
