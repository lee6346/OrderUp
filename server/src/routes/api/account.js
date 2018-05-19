const Router = require('express').Router();
const AccountController = require('../../controllers/account');
const { requireJwtAuth } = require('../../middlewares/auth');

Router.post('/', AccountController.create);

Router.put('/', requireJwtAuth, AccountController.edit);

Router.get('/', requireJwtAuth, AccountController.retrieve);

module.exports = Router;
