const winston = require('winston');
const moment = require('moment');
const config = require('../config');

let level;
let transports;

const makeMessage = (data) => {
  const log = {
    date: moment(),
    request: data.request,
    level: data.level,
    stack: data.stack,
    message: data.message,
  };

  return JSON.stringify(log);
};

switch (config.env) {
  default:
  case 'dev':
    level = 'verbose';
    transports = [new winston.transports.Console()];
    break;

  case 'prod':
    level = 'verbose';
    transports = [
      new winston.transports.File({
        filename: `src/log/errors/${moment().format('YYYY-MM-DD')}.log`,
        level: 'error',
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 10,
        format: winston.format.combine(
          winston.format.printf((data) => makeMessage(data)),
          winston.format.colorize(),
        ),
      }),
    ];
    break;
}

module.exports = winston.createLogger({ level, transports });
