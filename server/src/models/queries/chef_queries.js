const Chef = require('../chef');

const createChef = chefProps => {
  const chef = new Chef(chefProps);
  return chef.save();
};

const updateChef = (_id, chefProps) => {
  return Chef.update({ _id }, chefProps);
};

const deleteChef = _id => {
  return Chef.remove({ _id });
};

const findChef = _id => {
  return Chef.findById(_id);
};

module.exports = {
  createChef,
  updateChef,
  deleteChef,
  findChef,
};
