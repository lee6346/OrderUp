const menuQueries = require('../models/queries/menu-queries');

const errorResponse = (message, err) => {
  return {
    error: { message, details: err ? err : undefined },
  };
};

const update = async (req, res) => {
  try {
    const { params: { chefId, menuId }, error, user, body } = req;
    if (user) {
      const result = await menuQueries.updateMenu(chefId, menuId, body);
      return res.send(result);
    }
    res.status(403).send(errorResponse('unauthorized', error));
  } catch (error) {
    res.status(404).send(errorResponse('bad request', error));
  }
};

const create = async (req, res) => {
  try {
    const { user, error, body, params: { chefId } } = req;
    if (user) {
      const result = await menuQueries.createMenu(chefId, body);
      return res.status(200).send(result);
    }
    res.status(403).send(errorResponse('unauthorized', error));
  } catch (error) {
    res.status(404).send(errorResponse('bad request', error));
  }
};

const remove = async (req, res) => {
  try {
    const { params: { chefId, menuId }, error, user } = req;
    if (user) {
      const result = await menuQueries.removeMenu(chefId, menuId);
      return res.status(200).send(result);
    }
    res.status(403).send(errorResponse('unauthorized', error));
  } catch (error) {
    res.status(404).send(errorResponse('bad request', error));
  }
};

const retrieve = async (req, res) => {
  try {
    let { user, error, query } = req;
    if (user) {
      const { lng, lat, distance, sort, criteria, offset, limit } = getMenuQueryParams(query);
      const result = await menuQueries.getMenus(lat, lng, distance, criteria, sort, offset, limit);
      return res.status(200).send(result);
    }
    res.status(403).send(errorResponse('unauthorized', error));
  } catch (error) {
    res.status(404).send(errorResponse('bad request', error));
  }
};

const getMenuQueryParams = query => {
  const { lng, lat, distance, sort, price, category, offset, limit, keywords } = query;
  return {
    lng: Number(lng).toPrecision(lng.length),
    lat: Number(lat).toPrecision(lat.length),
    distance: Number(distance),
    criteria: {
      category,
      keywords,
      price: price ? Number(price).toPrecision(price.length) : undefined,
    },
    limit: limit ? Number(limit) : undefined,
    offset: offset ? Number(offset) : undefined,
    sort,
  };
};

const retrieveById = async (req, res) => {
  try {
    const { params: { chefId, menuId }, user, error } = req;
    if (user) {
      const result = await menuQueries.getMenu(chefId, menuId);
      return res.status(200).send(result);
    }
    res.status(403).send(errorResponse('unauthorized', error));
  } catch (error) {
    res.status(404).send(errorResponse('bad request', error));
  }
};

module.exports = {
  remove,
  update,
  create,
  retrieve,
  retrieveById,
};
