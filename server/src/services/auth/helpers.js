const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs');
const keys = require('../../../config/keys');

const generateToken = function(user) {
  const timestamp = new Date().getTime();
  const expiration = timestamp + 1800;
  return jwt.encode({ sub: user.id, iat: timestamp, exp: expiration }, keys.jwtSecret);
};

const hashAndSalt = async function(password) {
  try {
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
};

const comparePasswords = async function(candidate, hashed) {
  try {
    let matching = await bcrypt.compare(candidate, hashed);
    return matching;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  generateToken,
  hashAndSalt,
  comparePasswords,
};
