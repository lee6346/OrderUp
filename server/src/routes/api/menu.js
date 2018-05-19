const Router = require('express').Router({ mergeParams: true });
const MenuController = require('../../controllers/menu');
const { requireJwtAuth } = require('../../middlewares/auth');

Router.get('/:menuId', requireJwtAuth, MenuController.retrieveById);
Router.get('/', requireJwtAuth, MenuController.retrieve);
Router.post('/', requireJwtAuth, MenuController.create);
Router.put('/:menuId', requireJwtAuth, MenuController.update);
Router.delete('/:menuId', requireJwtAuth, MenuController.remove);

module.exports = Router;
