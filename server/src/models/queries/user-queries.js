const User = require('../user');

const userMapper = {
  name: 1,
  email: 1,
  imageUrl: 1,
  _id: 0,
};

const getUserById = async id => {
  try {
    const result = await User.findById(id);
    return result;
  } catch (error) {
    throw error;
  }
};

const getUserByIndex = async index => {
  try {
    const result = await User.findOne(index);
    return result;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, props) => {
  try {
    const result = await User.findByIdAndUpdate(id, props, { new: true });
    return result;
  } catch (error) {
    throw error;
  }
};

const createUser = async props => {
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
  getUserById,
  getUserByIndex,
  updateUser,
  createUser,
};
