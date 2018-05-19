const Router = require('express').Router();
const MenuRouter = require('./menu');
const ChefController = require('../../controllers/chef');
const { requireJwtAuth } = require('../../middlewares/auth');

// forwarded routes to /menus
Router.use('/:chefId?/menus', MenuRouter);
Router.get('/', ChefController.retrieve);
Router.get('/:chefId', ChefController.retrieveById);
Router.post('/', ChefController.create);
Router.put('/:chefId', ChefController.update);
Router.delete('/:chefId', ChefController.remove);

module.exports = Router;
