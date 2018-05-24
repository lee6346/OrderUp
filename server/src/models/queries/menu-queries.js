const Chef = require('../chef');

const createMenu = async (id, menuProps) => {
  try {
    const chef = await Chef.findById(id);
    chef.menuBook.push(menuProps);
    const result = await chef.save();
    return result.menuBook[0];
  } catch (error) {
    throw error;
  }
};

const removeMenu = async (chefId, menuId) => {
  try {
    const chef = await Chef.findById(chefId);
    chef.menuBook.id(menuId).remove();
    return await chef.save();
  } catch (error) {
    throw error;
  }
};

const updateMenu = async (chefId, menuId, menuProps) => {
  try {
    const chef = await Chef.findById(chefId);
    const menu = chef.menuBook.id(menuId);
    menu.set(menuProps);
    const result = await chef.save();
    return result.menuBook;
  } catch (error) {
    throw error;
  }
};

/**
 * Query
 * @param {Number} lat: latitude for geolocation
 * @param {Number} lng: longitude for geolocation
 * @param {Number} distance: max distance in miles within lat,lng coordinates
 * @param {Object} criteria: filter criterion (max price, min ratings, etc)
 * @param {String} sortby: the field to sort by (distance, date created, average ratings, etc)
 * @param {Number} offset: skip quantity for paginated queries
 * @param {Number} limit: record quantity after skip for paginated queries
 */
const getMenus = async (lat, lng, distance = 10000, criteria, sort, offset = 0, limit = 10) => {
  try {
    const menus = await Chef.aggregate([geoQuery(lat, lng, distance)])
      .unwind('$menuBook')
      .match(matchBuilder(criteria))
      .sort({ [sort]: 1 })
      .skip(Number(offset))
      .limit(Number(limit))
      .project({
        chef: '$name',
        menuId: '$menuBook._id',
        menuName: '$menuBook.name',
        images: '$menuBook.images',
        price: '$menuBook.price',
        category: '$menuBook.cuisineType',
        description: '$menuBook.description',
        created: '$menuBook.createdAt',
        address: {
          $concat: ['$address.street', ' ', '$address.city', ' ', '$address.state', ' ', '$address.zipCode'],
        },
        coordinates: {
          lng: {
            $arrayElemAt: ['$geoPoint.coordinates', 0],
          },
          lat: {
            $arrayElemAt: ['$geoPoint.coordinates', 1],
          },
        },
        distance: 1,
      });

    const total = await Chef.aggregate([geoQuery(lat, lng, distance)])
      .unwind('$menuBook')
      .match(matchBuilder(criteria))
      .count('menus');

    return {
      menus,
      total: total[0] ? total[0]['menus'] : 0,
      offset,
      limit,
    };
  } catch (error) {
    throw error;
  }
};

const getMenu = async (chefId, menuId) => {
  try {
    const chef = await Chef.findById(chefId);
    return chef.menuBook.id(menuId);
  } catch (error) {
    throw error;
  }
};

const geoQuery = (lat, lng, distance) => ({
  $geoNear: {
    near: [Number(lng), Number(lat)],
    distanceField: 'distance',
    spherical: true,
    maxDistance: Number(distance),
  },
});

const matchBuilder = criteria => {
  const query = {};
  if (criteria.price) {
    query['menuBook.price'] = {
      $lte: Number(criteria.price),
    };
  }

  if (criteria.keywords) {
    query['menuBook.description'] = {
      $regex: criteria.keywords,
      $options: 'i',
    };
  }

  if (criteria.category) {
    query.cuisineType = {
      $in: [criteria.category],
    };
  }
  return query;
};

module.exports = {
  getMenus,
  getMenu,
  createMenu,
  removeMenu,
  updateMenu,
};
