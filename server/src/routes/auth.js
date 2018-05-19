const Router = require('express').Router();
const AuthController = require('../controllers/auth');
const { requireLogin, requireGoogleAuth, getGoogleProfile } = require('../middlewares/auth');

Router.post('/login', requireLogin, AuthController.login);

Router.get('/google', requireGoogleAuth);

Router.get('/google/callback', getGoogleProfile);

module.exports = Router;
