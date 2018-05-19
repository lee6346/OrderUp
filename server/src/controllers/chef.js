const chefQueries = require('../models/queries/chef-queries');

/**
 * controller to handle http post request for creating a new chef record
 * @param {Object} req
 * @param {Object} res
 */
const create = async (req, res) => {
  try {
    const result = await chefQueries.createChef(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({
      error: {
        message: 'Failed to create chef account',
        details: error,
      },
    });
  }
};

/**
 * controller to handle http get request for querying chef records (not finished yet)
 * @param {Object} req
 * @param {Object} res
 */
const retrieve = async (req, res) => {
  const { user, error } = req;
  if (!user || error) {
    return res.status(401).send({
      error: {
        message: 'bad auth',
        details: error,
      },
    });
  }
  try {
    let result = await chefQueries.getChefs();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({
      error: {
        message: 'Failed to retrieve chefs',
        details: error,
      },
    });
  }
};

/**
 * controller to handle http get request for retrieving chef record by id
 * @param {Object} req
 * @param {Object} res
 */
const retrieveById = async (req, res) => {
  try {
    const { chefId } = req.params;
    const result = await chefQueries.getChef(chefId);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({
      error: {
        message: 'No chef records matching the id found',
        details: error,
      },
    });
  }
};

/**
 * controller to handle http put request for updating an existing chef record
 * @param {Object} req
 * @param {Object} res
 */
const update = async (req, res) => {
  try {
    const { params: { chefId }, body } = req;
    const result = await chefQueries.updateChef(chefId, body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({
      error: {
        message: 'Failed to update chef record',
        details: error,
      },
    });
  }
};

/**
 * controller to handle http delete request for removing a chef record
 * @param {Object} req
 * @param {Object} res
 */
const remove = async (req, res) => {
  try {
    const { chefId } = req.params;
    const result = await chefQueries.deleteChef(chefId);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({
      error: {
        message: 'No chef records matching the id found',
        details: error,
      },
    });
  }
};

module.exports = {
  create,
  retrieve,
  retrieveById,
  update,
  remove,
};
