const express = require("express");

const User = require("../models/userModel");
const Customer = require("../models/customerModel");
const Product = require("../models/productModel");
const { trusted } = require("mongoose");

const {
  checkOut,
  paymentVarification,
} = require("../controller/paymentController");

//router object
const router = express.Router();

//routes
router.post("/checkOut", checkOut); //abhi payment hui nhi hai isliye varification knra baaki hai
router.get("/getKey", (req, res) => {
  res.status(200).send({ key: process.env.RAZORPAY_API_KEY });
});
router.post("/paymentVarification", paymentVarification);

module.exports = router;
