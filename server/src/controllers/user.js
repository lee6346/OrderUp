const User = require('../models/user');

module.exports = {
  create(req, res, next) {
    res.send({ test: 'yo' });
  },
  retrieve(req, res, next) {
    res.send({ test: 'yo' });
  },
  update(req, res, next) {
    res.send({ test: 'yo' });
  },
  delete(req, res, next) {
    res.send({ test: 'yo' });
  },
};
