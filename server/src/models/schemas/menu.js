const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RatingSchema = require('./rating');

const MenuSchema = new Schema(
  {
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
    ratings: RatingSchema,
  },
  {
    timestamps: true,
  }
);

module.exports = MenuSchema;
