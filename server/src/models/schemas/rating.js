const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  average: {
    type: Number,
    min: 0,
    max: 5,
    default: undefined,
  },
  total: {
    type: Number,
    min: 0,
    default: 0,
  },
});

module.exports = RatingSchema;
