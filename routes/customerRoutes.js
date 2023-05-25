const express = require("express");

const User = require("../models/userModel");
const Customer = require("../models/customerModel");
const Product = require("../models/productModel");
const { trusted } = require("mongoose");

const {
  createCustomer,
  readAllCustomer,
  readCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("../controller/customerController");

//router object
const router = express.Router();

//routes

router.post("/createCustomer", createCustomer);
router.get("/readAllCustomer", readAllCustomer);
router.get("/readCustomerById", readCustomerById);
router.put("/updateCustomer", updateCustomer);
router.delete("/deleteCustomer", deleteCustomer);

module.exports = router;
