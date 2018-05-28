const authConfig = require('../../config').auth;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../../models/user');
const userQueries = require('../../models/queries/user-queries');

const JwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: authConfig.jwtSecret,
};

const JwtLogin = new JwtStrategy(JwtOptions, async (payload, done) => {
  try {
    if (payload && payload.sub) {
      let user = await userQueries.getUserById(payload.sub);
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
  clientID: authConfig.google.clientId,
  clientSecret: authConfig.google.clientSecret,
  callbackURL: '/auth/google/callback',
};

const GoogleLogin = new GoogleStrategy(GoogleOptions, async (accessToken, refreshToken, profile, done) => {
  let existingUser = await userQueries.getUserByIndex({ googleId: profile.id });
  if (existingUser) {
    return done(null, existingUser);
  }
  existingUser = await userQueries.getUserByIndex({ email: profile.emails[0].value });
  if (existingUser) {
    const updatedUser = await userQueries.updateUser(existingUser._id, { googleId: profile.id });
    return done(null, updatedUser);
  }

  const props = {
    googleId: profile.id,
    email: profile.emails[0].value,
    name: profile.displayName,
  };
  const user = await userQueries.createUser(props);
  done(null, user);
});

module.exports = {
  JwtLogin,
  LocalLogin,
  GoogleLogin,
};
