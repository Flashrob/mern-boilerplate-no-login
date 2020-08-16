const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  monday: {
    type: String,
    required: true
  },
  tuesday: {
    type: String,
    required: true
  },
  wednesday: {
    type: String,
    required: true
  },
  thursday: {
    type: String,
    required: true
  },
  friday: {
    type: String,
    required: true
  },
  saturday: {
    type: String,
    required: true
  },
  sunday: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("restaurant", RestaurantSchema);