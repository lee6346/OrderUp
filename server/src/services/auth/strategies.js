const keys = require('../../../config/keys');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../../models/user');
const accountQueries = require('../../models/queries/account-queries');

const JwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: keys.jwtSecret,
};

const JwtLogin = new JwtStrategy(JwtOptions, async (payload, done) => {
  try {
    if (payload && payload.sub) {
      let user = await accountQueries.getAccountById(payload.sub);
      return done(null, user);
    }
    return done(null, false);
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
  done(null, user);
});

const GoogleOptions = {
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
};

const GoogleLogin = new GoogleStrategy(GoogleOptions, async (accessToken, refreshToken, profile, done) => {
  //profile = user's google profile object
  console.log(profile);
  // first check if we have the google id in our own database
  const existingUser = await accountQueries.getAccountByEmail({ googleId: profile.id }); //User.findOne({ googleId: profile.id });
  if (existingUser) {
    done(null, existingUser);
  }

  const user = await new User({ googleId: profile.id }).save();
  done(null, user);
});

module.exports = {
  JwtLogin,
  LocalLogin,
  GoogleLogin,
};
