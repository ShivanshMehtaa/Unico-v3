const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
    },
    productCategory: {
      type: String,
      required: true,

      unique: true,
    },
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    productWeight: {
      type: String,
      required: true,
    },
    ingredents: {
      type: String,
      required: true,
    },
    shelfLife: {
      type: String,
      required: true,
    },

    productStock: {
      type: Number,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },

    // nutrition: {
    //   energy: {
    //     type: String,
    //     required: true,
    //   },
    //   protien: {
    //     type: String,
    //     required: true,
    //   },
    //   carbohydrates: {
    //     type: String,
    //     required: true,
    //   },
    //   addedSugar: {
    //     type: String,
    //     required: true,
    //   },
    //   totalFat: {
    //     type: String,
    //     required: true,
    //   },
    //   transFat: {
    //     type: String,
    //     required: true,
    //   },
    //   Cholesterol: {
    //     type: String,
    //     required: true,
    //   },
    //   totalSugar: {
    //     type: String,
    //     required: true,
    //   },
    // },

    nutrition: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("product", Schema);

module.exports = product;
