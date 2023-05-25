const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Customer = require("../models/customerModel");
const Product = require("../models/productModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = asyncHandler(async (req, res) => {
  try {
    console.log(req.body.data);
    const existedUser = await User.findOne({
      email: req.body.data.email,
    });
    if (existedUser) {
      return res
        .status(200)
        .send({ message: "user Already Exist", success: false });
    }

    const password = req.body.data.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.data.password = hashedPassword;
    const newuser = new User(req.body.data);
    await newuser.save();

    res.status(200).send({
      message: "user created successfully",
      success: true,
      data: newuser,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Error creating user", success: false, error });
  }
});

const login = asyncHandler(async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.data.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "User does not exist", success: false });
    }
    var identity = "";
    if (user.isAdmin) {
      // console.log("hn hn me admin nhi hu");
      identity = "admin";
    }
    const isMatch = await bcrypt.compare(req.body.data.password, user.password);
    // isMatch = req.body.password === user.password;
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Password is incorrect", success: false });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).send({
        message: "Login successful",
        success: true,
        data: user,
        identity: identity,
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Error logging in", success: false, error });
  }
});
const readAllUser = asyncHandler(async (req, res) => {
  try {
    const allUser = await User.find({});
    if (!allUser) {
      res.status(200).send({ message: "There is no User", success: false });
    } else {
      res.status(200);
      res.send({
        message: "User fetched Succesfully",
        success: true,
        data: allUser,
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Error in Fetching User", success: false, error });
  }
});
const readUserById = asyncHandler(async (req, res) => {
  try {
    console.log(req.body.data);
    const user = await User.findOne({
      userId: req.body.data.userId,
    });
    if (!user) {
      res
        .status(200)
        .send({ message: "Such User is not Availabele", success: false });
    } else {
      res.status(200).send({
        message: "succesfully fetched",
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Error in finding User", success: false, error });
  }
});
const updateUser = asyncHandler(async (req, res) => {});

const deleteUser = asyncHandler(async (req, res) => {
  try {
    console.log(req.body.data);
    const user = await User.findOneAndRemove({
      UserId: req.body.data.UserId,
    });
    if (user) {
      return res.status(200).send({
        message: "User has been deleted",
        success: true,
        data: user,
      });
    } else {
      res.status(200).send({
        message: "Such User doesNot Exist",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "error deleting User",
      success: false,
      error,
    });
  }
});

module.exports = {
  createUser,
  readAllUser,
  readUserById,
  updateUser,
  deleteUser,
  login,
};
