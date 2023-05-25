const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Customer = require("../models/customerModel");
const Product = require("../models/productModel");

const createCustomer = asyncHandler(async (req, res) => {
  try {
    console.log(req.body.data);
    const existedCustomer = await Customer.findOne({
      CustomerId: req.body.data.CustomerId,
    });
    if (existedCustomer) {
      return res
        .status(200)
        .send({ message: "Customer Already Exist", success: false });
    }
    const newCustomer = new Customer(req.body.data);
    await newCustomer.save();

    res.status(200).send({
      message: "Customer created successfully",
      success: true,
      data: newCustomer,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Error creating Customer", success: false, error });
  }
});
const readAllCustomer = asyncHandler(async (req, res) => {
  try {
    const allCustomer = await Customer.find({});
    if (!allCustomer) {
      res.status(200).send({ message: "There is no Customer", success: false });
    } else {
      res.status(200);
      res.send({
        message: "Customer fetched Succesfully",
        success: true,
        data: allCustomer,
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Error in Fetching Customer", success: false, error });
  }
});
const readCustomerById = asyncHandler(async (req, res) => {
  try {
    console.log(req.body.data);
    const customerCheck = await Customer.findOne({
      CustomerId: req.body.data.CustomerId,
    });
    if (!customerCheck) {
      res
        .status(200)
        .send({ message: "Such Customer is not Availabele", success: false });
    } else {
      res.status(200).send({
        message: "succesfully fetched",
        success: true,
        data: customerCheck,
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Error in finding Customer", success: false, error });
  }
});
const updateCustomer = asyncHandler(async (req, res) => {});
const deleteCustomer = asyncHandler(async (req, res) => {
  try {
    console.log(req.body.data);
    const customer = await Customer.findOneAndRemove({
      CustomerId: req.body.data.CustomerId,
    });
    if (customer) {
      return res.status(200).send({
        message: "Customer has been deleted",
        success: true,
        data: customer,
      });
    } else {
      res.status(200).send({
        message: "Such Customer doesNot Exist",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "error deleting Customer",
      success: false,
      error,
    });
  }
});

module.exports = {
  createCustomer,
  readAllCustomer,
  readCustomerById,
  updateCustomer,
  deleteCustomer,
};
