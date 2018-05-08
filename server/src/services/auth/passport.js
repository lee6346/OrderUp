const passport = require('passport');
const { JwtLogin, LocalLogin, GoogleLogin } = require('./strategies');
const User = require('../../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(JwtLogin);
passport.use(LocalLogin);
