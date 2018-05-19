const AWS = require('aws-sdk');
const uuid = require('uuid/v1');
const keys = require('../../../config/keys');
const { requireJwtAuth } = require('../../middlewares/auth');

const s3 = new AWS.S3({
  accessKeyId: keys.s3AccessKeyId,
  secretAccessKey: keys.s3SecretAccessKey,
});

module.exports = app => {
  app.get('/api/v1/uploads/aws', requireJwtAuth, function(req, res, next) {
    if (req.user) {
      const key = `${req.user.id}/profile/${uuid()}.jpeg`;
      s3.getSignedUrl(
        'putObject',
        {
          Bucket: 'cater-profile-bucket',
          ContentType: 'image/jpeg',
          Key: key,
        },
        (err, url) => res.send({ key, url })
      );
    } else {
      res.send({ error: 'NO USER!' });
    }
  });
};
