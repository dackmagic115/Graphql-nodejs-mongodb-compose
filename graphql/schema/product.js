const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: String,
    require: true,
    unique: true
  },
  detail: {
    type: String,
    require: true
  }
});

module.exports = ProductSchema;
