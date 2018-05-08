const MenuController = require('../controllers/menu');
const { requireJwtAuth } = require('../middlewares/auth');

module.exports = app => {
  app.get('/api/menu/:id', requireJwtAuth, MenuController.retrieveById);

  app.post('/api/menu', requireJwtAuth, MenuController.create);

  app.put('/api/menu/:id', requireJwtAuth, MenuController.update);

  app.delete('/api/menu/:id', requireJwtAuth, MenuController.remove);
};
