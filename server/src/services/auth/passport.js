const passport = require('passport');
const { JwtLogin, LocalLogin, GoogleLogin } = require('./strategies');
const accountQueries = require('../../models/queries/account-queries');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await accountQueries.getAccountById(id);
  done(null, user);
});

passport.use(JwtLogin);
passport.use(LocalLogin);
passport.use(GoogleLogin);
