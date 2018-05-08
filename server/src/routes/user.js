const UserController = require('../controllers/user');
const { requireJwtAuth } = require('../middlewares/auth');

module.exports = app => {
  app.get('/api/users', requireJwtAuth, function(req, res) {
    res.send({ hi: 'there' });
  });

  app.get('/api/users/:id', UserController.retrieve);

  app.post('/api/users', UserController.create);

  app.put('/api/users/:id', UserController.update);

  app.delete('/api/users/:id', UserController.delete);
};
