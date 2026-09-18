const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      default: "",
    },

    description: {
      type: String,
    },

    cuisine: {
      type: String,
    },

    rating: {
      type: Number,
      default: 0,
    },

    deliveryTime: {
      type: Number,
      default: 30,
    },

    deliveryFee: {
      type: Number,
      default: 0,
    },

    location: {
      type: String,
    },

    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);