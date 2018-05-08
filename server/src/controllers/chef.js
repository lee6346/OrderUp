const Chef = require('../models/chef');

const create = async (req, res, next) => {
  const { body: chefProps } = req;
  const chef = await Chef.create(chefProps).catch(next);
  res.send(chef);
};

const retrieve = async (req, res, next) => {
  const { id } = req.params;
  let chef;
  if (id) {
    chef = await Chef.findById(id).catch(next);
    res.send(chef);
  }
  let chefs = await Chef.aggregate([
    {
      $geoNear: {
        near: [-122.1753378, 47.7546262],
        distanceField: 'distance.calculated',
        spherical: true,
        maxDistance: 1000000,
      },
    },
  ])
    .limit(5)
    .catch(next);
  res.send(chefs);
};

const update = (req, res, next) => {
  res.send({ test });
};

const remove = (req, res, next) => {
  res.send({ test });
};

module.exports = {
  create,
  retrieve,
  update,
  remove,
};
