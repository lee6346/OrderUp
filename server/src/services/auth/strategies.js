const keys = require('../../../config/keys');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../../models/user');

const JwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: keys.jwtSecret,
};

const JwtLogin = new JwtStrategy(JwtOptions, async (payload, done) => {
  try {
    let user = await User.findById(payload.sub);
    let result = user ? user : false;
    done(null, result);
  } catch (error) {
    return done(error, false);
  }
});

const LocalOptions = {
  usernameField: 'email',
};

const LocalLogin = new LocalStrategy(LocalOptions, async (email, password, done) => {
  let user = await User.findOne({ email }).catch(error => done(error));
  if (!user) {
    return done(null, false);
  }
  let match = await user.comparePassword(password).catch(error => done(error));
  if (!match) {
    return done(null, false);
  }
  return done(null, user);
});

const GoogleOptions = {
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true,
};

const GoogleLogin = new GoogleStrategy(GoogleOptions, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id });
  if (existingUser) {
    return done(null, existingUser);
  }
  const user = await new User({ googleId: profile.id }).save();
  done(null, user);
});

module.exports = {
  JwtLogin,
  LocalLogin,
  GoogleLogin,
};
