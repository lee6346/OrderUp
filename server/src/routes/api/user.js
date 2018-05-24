const Router = require('express').Router();
const UserController = require('../../controllers/user');
const { requireJwtAuth } = require('../../middlewares/auth');

Router.put('/', requireJwtAuth, UserController.edit);

Router.get('/', requireJwtAuth, UserController.retrieve);

module.exports = Router;
