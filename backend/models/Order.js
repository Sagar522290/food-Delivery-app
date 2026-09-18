const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },

    items: [
      {
        food: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Food",
        },

        name: String,

        quantity: Number,

        price: Number,
      },
    ],

    deliveryAddress: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "UPI", "CARD"],
      default: "COD",
    },

    itemTotal: {
      type: Number,
      required: true,
    },

    deliveryFee: {
      type: Number,
      default: 0,
    },

    packagingFee: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "confirmed",
        "preparing",
        "out-for-delivery",
        "delivered",
        "cancelled",
      ],
      default: "confirmed",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);