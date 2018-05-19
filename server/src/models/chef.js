const mongoose = require('mongoose');
const PointSchema = require('./schemas/point');
const AddressSchema = require('./schemas/address');
const MenuSchema = require('./schemas/menu');
const Schema = mongoose.Schema;

const ChefSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      index: true,
    },
    name: String,
    address: {
      type: AddressSchema,
      required: true,
    },
    geoPoint: PointSchema,
    menuBook: [MenuSchema],
    specialty: [String],
  },
  {
    timestamps: true,
  }
);

const Chef = mongoose.model('chef', ChefSchema);

module.exports = Chef;
