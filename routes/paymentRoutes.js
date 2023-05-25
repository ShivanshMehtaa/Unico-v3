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
router.post("/checkOut", checkOut);
router.get("/getKey", (req, res) => {
  res.status(200).send({ key: process.env.RAZORPAY_API_KEY });
});
router.get("/paymentVarification", paymentVarification);

module.exports = router;
