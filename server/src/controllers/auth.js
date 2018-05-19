const accountQueries = require('../models/queries/account-queries');
const { generateToken } = require('../services/auth/helpers');

const errorResponse = (message, err) => {
  return {
    error: { message, details: err ? err : undefined },
  };
};

/**
 * controller to handle successful login to send an auth token to user
 * @param {Object} req
 * @param {Object} res
 */
const login = (req, res) => {
  console.log(req);
  const { user } = req;
  if (user) {
    return res.status(200).send({
      token: generateToken(user),
      email: user.email,
      name: user.name,
      imageUrl: user.imageUrl,
    });
  }
  res.status(401).send(errorResponse('login failed'));
};

const loginToken = (req, res) => {
  const { user } = req;
  if (user) {
    return res.status(200).send({
      email: user.email,
      name: user.name,
      imageUrl: user.imageUrl,
    });
  }
  res.status(401).send(errorResponse('bad token'));
};

const resetPassword = async (req, res) => {
  res.send({ test });
};

module.exports = {
  login,
  loginToken,
  resetPassword,
};
