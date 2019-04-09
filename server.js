/* eslint-disable no-bitwise */

/**
 * Module dependencies
 */

require('dotenv').config();

const fs = require('fs');
const join = require('path').join;
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const models = join(__dirname, 'app/models');
const port = process.env.PORT || 3000;

const app = express();

function listen() {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log(`Express app started on port ${port}`);
}

function connect() {
  const options = { keepAlive: 1, useNewUrlParser: true, useCreateIndex: true };
  mongoose.connect(config.db, options);
  return mongoose.connection;
}
const connection = connect();

module.exports = {
  app,
  connection,
};

// Bootstrap models
fs.readdirSync(models)
  .filter(file => ~file.indexOf('.js'))
  .forEach(file => require(join(models, file)));

// Bootstrap routes
// require('./config/passport')(passport);
require('./config/express')(app);
require('./config/routes')(app);

connection
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);
