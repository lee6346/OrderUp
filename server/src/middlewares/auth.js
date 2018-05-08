const passport = require('passport');

const requireJwtAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = {
  requireJwtAuth,
  requireLogin,
};
