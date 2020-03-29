const config = require('../config');
const logger = require('../log');

const errorHandler = (error, req, res, next) => {
  const {
    body,
    params,
    headers,
    route,
  } = req;

  const { level, stack, message } = error;

  const data = {
    request: {
      body,
      params,
      headers,
      route,
    },
    level,
    stack,
    message,
  };

  logger.error(data);

  if (config.env === 'prod') {
    res.status(400).json({ error: message });
  } else {
    res.status(400).json({ error });
  }

  next();
};

module.exports = errorHandler;
