const Menu = require('../models/schemas/menu');

const remove = async (req, res, next) => {
  try {
    let menuId = req.params.id;
    let result = await Menu.remove({ id: menuId });
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    let menuId = req.params.id;
    let menuProps = req.body;
    let result = await Menu.updateOne({ id: menuId }, menuProps);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    let menuProps = req.body;
    let result = await Menu.create(menuProps);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const retrieveById = async (req, res, next) => {
  try {
    let menuId = req.params.id;
    let result = await Menu.findById(menuId);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  remove,
  update,
  create,
  retrieveById,
};
