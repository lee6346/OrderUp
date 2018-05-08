const mongoose = require('mongoose');
const validator = require('./helpers/validators');
const { comparePasswords, hashAndSalt } = require('../services/auth/helpers');
const PointSchema = require('./schemas/point');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    googleId: String,
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      validate: {
        validator: validator.isValidEmail,
        message: 'Invalid email address. Please check its format',
      },
    },
    name: String,
    password: {
      type: String,
      required: true,
      validate: {
        validator: validator.isValidPassword,
        message: 'Invalid password, please make sure its at least 8 characters',
      },
    },
    registeredChef: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: true,
    },
  }
);

UserSchema.pre('save', async function(next) {
  let user = this;
  let pass = user.password;
  user.password = await hashAndSalt(pass).catch(error => next(error));
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
  return await comparePasswords(candidatePassword, this.password).catch(error => {
    throw error;
  });
};

const User = mongoose.model('user', UserSchema);

module.exports = User;
