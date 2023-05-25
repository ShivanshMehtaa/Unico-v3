const mongoose = require("mongoose");
const product = require("./productModel");
var ObjectId = mongoose.Schema.ObjectId;
const Schema = new mongoose.Schema(
  {
    userId: {
      type: String,
      // require: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isCustomer: {
      type: Boolean,
      default: false,
    },

    cartProducts: { type: Array },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", Schema);

module.exports = user;
