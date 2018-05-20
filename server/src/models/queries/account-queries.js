const User = require('../user');

const accountMapper = {
  name: 1,
  email: 1,
  imageUrl: 1,
  _id: 0,
};

const getAccountById = async id => {
  try {
    const result = await User.findById(id);
    return result;
  } catch (error) {
    throw error;
  }
};

const getAccountByIndex = async index => {
  try {
    const result = await User.findOne(index);
    return result;
  } catch (error) {
    throw error;
  }
};

const updateAccount = async (id, props) => {
  try {
    const result = await User.findByIdAndUpdate(id, props, { new: true });
    return result;
  } catch (error) {
    throw error;
  }
};

const createAccount = async props => {
  try {
    const { email } = props;
    const existing = await User.findOne({ email });
    if (existing) {
      throw new Error('Email exists');
    }
    const user = await new User(props).save();
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAccountById,
  getAccountByIndex,
  updateAccount,
  createAccount,
};
