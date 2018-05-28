const AWS = require('aws-sdk');
const uuid = require('uuid/v1');
const s3Config = require('../../config').aws.s3;
const { requireJwtAuth } = require('../../middlewares/auth');

const IMAGE_TYPE = 'image/jpeg';
const DEFAULT_EXPIRATION = 1200; //20 min

const s3 = new AWS.S3({
  accessKeyId: s3Config.accessKeyId,
  secretAccessKey: s3Config.secretAccessKey,
});

const getSignedUrlPromise = (operation, params) =>
  new Promise((res, rej) => {
    s3.getSignedUrl(operation, params, (err, url) => {
      if (err) {
        rej(err);
      } else {
        res(url);
      }
    });
  });

const deleteObjectsPromise = params => {
  new Promise((res, rej) => {
    s3.deleteObjects(params, (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    });
  });
};

const deleteObjectPromise = params => {
  new Promise((res, rej) => {
    s3.deleteObject(params, (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    });
  });
};

const getSignedUrl = async (userId, overwriteId) => {
  const objectId = overwriteId ? overwriteId : uuid();
  const key = `${userId}/profile/${objectId}.jpeg`;
  const bucketParams = {
    Bucket: s3Config.bucket,
    ContentType: 'image/jpeg',
    Key: key,
  };
  const url = await getSignedUrlPromise('putObject', bucketParams);
  return { key, url };
};

const deleteObject = async (userId, objectId) => {
  const key = `${userId}/profile/${objectId}.jpeg`;
  const bucketParams = {
    Bucket: s3Config.bucket,
    Key: key,
  };
  const data = await deleteObjectPromise(bucketParams);
  return data;
};

const deleteObjects = async (userId, objectIds) => {
  const data = await deleteObjectsPromise({
    Bucket: s3Config.bucket,
    Delete: {
      Objects: objectIds,
    },
  });
  return data;
};

module.exports = {
  getSignedUrl,
  deleteObject,
  deleteObjects,
};
