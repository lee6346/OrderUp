const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cuisineType: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [String],
  description: {
    type: String,
    required: true,
  },
  glutenFree: {
    type: Boolean,
    default: false,
  },
});

module.exports = MenuSchema;
