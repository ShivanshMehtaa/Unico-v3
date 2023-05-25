const express = require("express");

const User = require("../models/userModel");
const Customer = require("../models/customerModel");
const Product = require("../models/productModel");
const { trusted } = require("mongoose");

const {
  createUser,
  readAllUser,
  readUserById,
  updateUser,
  deleteUser,
  login,
} = require("../controller/userController");

//router object
const router = express.Router();

//routes

router.post("/createUser", createUser);
router.get("/readAllUser", readAllUser);
router.get("/readUserById", readUserById);
router.put("/updateUser", updateUser);
router.delete("/deleteUser", deleteUser);

router.post("/login", login);

module.exports = router;
