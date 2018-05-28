const s3 = require('../services/aws/s3');
const userQueries = require('../models/queries/user-queries');

const errorResponse = (message, err) => {
  return {
    error: { message, details: err ? err : undefined },
  };
};

const deleteFile = async (req, res) => {
  const { user, params } = req;
  if (user) {
    try {
      const response = await s3.deleteObject(user.id, params.objectId);
      userQueries.updateUser(user.id, { imageUrl: null });
      return res.status(200).send({ imageUrl: objectId });
    } catch (error) {
      return res.status(404).send(errorResponse('bad request', error));
    }
  }
  res.status(401).send(errorResponse('unauthorized'));
};

const getFileUrl = async (req, res) => {
  const { user, params } = req;
  if (user) {
    try {
      const key = await s3.getSignedUrl(user.id, params.objectId);
      return res.status(200).send(key);
    } catch (error) {
      return res.status(404).send(errorResponse('bad request', error));
    }
  }
  res.status(401).send(errorResponse('unauthorized'));
};

module.exports = {
  deleteFile,
  getFileUrl,
};
