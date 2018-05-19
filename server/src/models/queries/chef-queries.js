const Chef = require('../chef');

const createChef = async chefProps => {
  try {
    const chef = new Chef(chefProps);
    return await chef.save();
  } catch (error) {
    throw error;
  }
};

const updateChef = async (id, chefProps) => {
  try {
    return await Chef.findByIdAndUpdate(id, chefProps);
  } catch (error) {
    throw error;
  }
};

const deleteChef = async id => {
  try {
    return await Chef.deleteOne({ _id: id });
  } catch (error) {
    throw error;
  }
  //return Chef.remove({ _id });
};

const getChef = id => {
  return Chef.findById(id);
};
// requires query string
const getChefs = () => {};

const geoQuery = (coords, maxDistance = 10000) => ({
  $geoNear: {
    near: [coords.lat, coords.lng],
    distanceField: 'distance',
    spherical: true,
    maxDistance,
  },
});

const matchBuilder = options => {
  const query = {};

  if (options.price) {
    query.price = {
      $lte: options.price,
    };
  }
  if (options.rating) {
    query.rating = {
      $gte: options.rating,
    };
  }
  return {
    $match: query,
  };
};

module.exports = {
  createChef,
  updateChef,
  deleteChef,
  getChef,
  getChefs,
};
