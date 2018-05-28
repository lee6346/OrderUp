const Router = require('express').Router();
const s3 = require('../services/aws/s3');
const UploadsController = require('../controllers/uploads');
const { requireJwtAuth } = require('../middlewares/auth');

Router.get('/:objectId', requireJwtAuth, UploadsController.getFileUrl);
//Router.delete('/:objectId', requireJwtAuth, MenuController.remove);

module.exports = Router;
