const userQueries = require('../models/queries/user-queries');
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
  const { user } = req;
  if (user) {
    return res.status(200).send({
      token: generateToken(user._id),
      //token: generateToken(user),
    });
  }
  res.status(401).send(errorResponse('login failed'));
};

const googleLogin = (req, res) => {
  //console.log(req);
  console.log(req.query);
  const { user } = req;
  if (user) {
    const token = generateToken(user._id);
    return res.redirect(`/oauthsuccess/${token}`);
  }
  res.status(401).send(errorResponse('login failed'));
};

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userQueries.createUser({ email, password });
    res.status(200).send({
      token: generateToken(user._id),
      //token: generateToken(user)
    });
  } catch (error) {
    res.status(400).send(errorResponse('Failed to create account', error));
  }
};

const resetPassword = async (req, res) => {
  res.send({ test });
};

module.exports = {
  login,
  resetPassword,
  register,
  googleLogin,
};
