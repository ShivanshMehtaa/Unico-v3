const express = require("express");

const User = require("../models/userModel");
const Customer = require("../models/customerModel");
const Product = require("../models/productModel");
const { trusted } = require("mongoose");

const {
  createProduct,
  readAllProduct,
  readProductByCategory,
  updateProductStock,
  deleteProduct,
} = require("../controller/adminController");

//router object
const router = express.Router();

//routes
router.post("/createProduct", createProduct);
router.get("/readAllProduct", readAllProduct);
router.post("/readProductByCategory", readProductByCategory);
router.put("/updateProductStock", updateProductStock);
router.delete("/deleteProduct", deleteProduct);

module.exports = router;
