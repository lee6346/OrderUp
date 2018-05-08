const mongoose = require('mongoose');

const keys = require('../../config/keys');

mongoose.connect(keys.mongoURI).catch(err => {
  console.log(err);
});

let db = mongoose.connection;

module.exports = db;
