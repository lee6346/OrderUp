const userQueries = require('../models/queries/user-queries');
const { generateToken } = require('../services/auth/helpers');

const errorResponse = (message, err) => {
  return {
    error: { message, details: err ? err : undefined },
  };
};

const edit = async (req, res) => {
  try {
    const { user, body, error } = req;
    if (user) {
      const result = await userQueries.updateUser(user.id, body);
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
  edit,
  retrieve,
};
