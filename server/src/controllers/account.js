const accountQueries = require('../models/queries/account-queries');
const { generateToken } = require('../services/auth/helpers');

const errorResponse = (message, err) => {
  return {
    error: { message, details: err ? err : undefined },
  };
};

/**
 * controller to create a new user account
 * @param {Object} req
 * @param {Object} res
 */
const create = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await accountQueries.getAccountByIndex({ email });
    if (existing) {
      return res.status(422).send(errorResponse('Email is already in use'));
    }
    let user = await accountQueries.createAccount({ email, password });
    res.status(200).send({
      token: generateToken(user),
      name: user.name,
      email: user.email,
      imageUrl: user.imageUrl,
    });
  } catch (error) {
    res.status(400).send(errorResponse('Failed to create account', error));
  }
};

const edit = async (req, res) => {
  try {
    const { user, body, error } = req;
    if (user) {
      const result = await accountQueries.updateAccount(user.id, body);
      return res.status(200).send(result);
    }
    res.status(403).send(errorResponse('unauthorized', error));
  } catch (error) {
    res.status(404).send(errorResponse('bad request', error));
  }
};

const retrieve = async (req, res) => {
  const { user, error } = req;
  if (user) {
    return res.status(200).send(user);
  }
  res.status(403).send(errorResponse('unauthorized', error));
};

module.exports = {
  create,
  edit,
  retrieve,
};
