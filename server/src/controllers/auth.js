const User = require('../models/user');
const { generateToken } = require('../services/auth/helpers');

const register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(422).send({ error: 'Email is already in use' });
    }
    let user = await new User({ email, password }).save();
    res.json({ token: generateToken(user), ...user });
  } catch (error) {
    return next(error);
  }
};

//This controller expects LocalLogin Strategy middleware to be passed into the route it corresponds with
//whereas the strategy will pass 'user' as a property of req to this controller to use
const login = (req, res, next) => {
  if (req.user) {

    res.send({ token: generateToken(req.user), ...req.user });
  } else {
    res.send({ error: 'bad login' });
  }
};

const resetPassword = async (req, res, next) => {
  res.send({ test });
};

const logout = (req, res, next) => {
  res.send({ test });
};

module.exports = {
  login,
  register,
  resetPassword,
  logout,
};
