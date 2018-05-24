const passport = require('passport');
const { JwtLogin, LocalLogin, GoogleLogin } = require('./strategies');
const userQueries = require('../../models/queries/user-queries');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userQueries.getUserById(id);
  done(null, user);
});

passport.use(JwtLogin);
passport.use(LocalLogin);
passport.use(GoogleLogin);

module.exports = passport;
