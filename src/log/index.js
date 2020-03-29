const winston = require('winston');
const moment = require('moment');
const config = require('../config');

const messageTemplate = options => {
  const date = moment().format();
  const level = winston.config.addColors(options.level)
  const { message = '' } = options;

  return `{"date": "${date}", "level": "${level}", "message": "${message}"}`;
}

let level, transports;

switch (config.env) {
  case 'dev':
    level = 'verbose';
    transports = [new winston.transports.Console()];
  break;

  case 'prod':
    level = 'verbose';
    transports = [
      new winston.transports.File({
        filename: './src/log/error.log',
        level: 'error'
      }),
      new winston.transports.File({
        filename: './src/log/combined.log',
        level: 'verbose',
        format: winston.format.combine(
          winston.format.printf(options => messageTemplate(options))
        )
      })
    ];
  break;
}

module.exports = winston.createLogger({ level, transports });
