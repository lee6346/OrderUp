const AuthController = require('../controllers/auth');
const { requireLogin } = require('../middlewares/auth');
module.exports = app => {
  app.get('/auth/logout', AuthController.logout);

  app.post('/auth/login', requireLogin, AuthController.login);

  app.post('/auth/register', AuthController.register);

  app.post('/auth/reset', AuthController.resetPassword);
};
