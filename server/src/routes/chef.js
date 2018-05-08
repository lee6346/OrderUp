const ChefController = require('../controllers/chef');
const { requireJwtAuth } = require('../middlewares/auth');

module.exports = app => {
  app.get('/api/v1/chefs', ChefController.retrieve);

  //app.get('/api/v1/chefs/:id', ChefController.retrieve);

  app.post('/api/v1/chefs', ChefController.create);

  app.put('/api/v1/chefs/:id', ChefController.update);

  app.delete('/api/v1/chefs/:id', ChefController.remove);
};
