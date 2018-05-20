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
    let result = await accountQueries.createAccount({ email, password });
    console.log(result.id);
    res.status(200).send({
      token: generateToken(result),
      name: result.name,
      email: result.email,
      imageUrl: result.imageUrl,
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
      return res.status(200).send({
        name: result.name,
        email: result.email,
        imageUrl: result.imageUrl,
      });
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
