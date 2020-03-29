const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const routes = require('./routes');
const { errorHandler } = require('./middlewares');

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(errorHandler);

app.use('/', routes);

module.exports = app;
