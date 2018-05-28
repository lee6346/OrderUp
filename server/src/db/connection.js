const mongoose = require('mongoose');

const mongoConfig = require('../config').db.mongo;

mongoose.connect(mongoConfig.uri).catch(err => {
  console.log(err);
});

let db = mongoose.connection;

module.exports = db;
