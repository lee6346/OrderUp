const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs');
const jwtSecret = require('../../config').auth.jwtSecret;

const generateToken = function(userId) {
  const timestamp = new Date().getTime();
  const expiration = timestamp + 1800;
  return jwt.encode({ sub: userId, iat: timestamp, exp: expiration }, jwtSecret);
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
