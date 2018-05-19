const mongoose = require('mongoose');
const validator = require('./helpers/validators');
const Schema = mongoose.Schema;

const MenuReviewSchema = new Schema(
  {
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    comment: String,
    rater: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    upvote: Number,
  },
  {
    timestamps: {
      createdAt: true,
    },
  }
);

const MenuReviewModel = mongoose.model('menuReview', MenuReviewSchema);
module.exports = MenuReviewModel;
