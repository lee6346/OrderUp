const passport = require('../services/auth/passport');

const requireJwtAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });
const requireGoogleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

const getGoogleProfile = passport.authenticate('google');

module.exports = {
  requireJwtAuth,
  requireLogin,
  requireGoogleAuth,
  getGoogleProfile,
};
