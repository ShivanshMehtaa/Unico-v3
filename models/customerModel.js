const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    // customer id = user id
    customerId: {
      type: String,
      require: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    //optional
    appartment: {
      type: String,
      //   required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },

    productHistory: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const customer = mongoose.model("customer", Schema);

module.exports = customer;
