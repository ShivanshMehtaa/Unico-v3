const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Customer = require("../models/customerModel");
const Product = require("../models/productModel");

const createProduct = asyncHandler(async (req, res) => {
  try {
    console.log(req.body.data);
    const existedProfuct = await Product.findOne({
      productId: req.body.data.productId,
    });
    if (existedProfuct) {
      return res
        .status(200)
        .send({ message: "product Already Exist", success: false });
    }
    const newProduct = new Product(req.body.data);
    await newProduct.save();

    res.status(200).send({
      message: "Product created successfully",
      success: true,
      data: newProduct,
    });
  } catch (error) {
    // console.log(error);
    res
      .status(500)
      .send({ message: "Error creating Product", success: false, error });
  }
});
const readAllProduct = asyncHandler(async (req, res) => {
  try {
    const allProduct = await Product.find({});
    if (!allProduct) {
      res.status(200).send({ message: "There is no Product", success: false });
    } else {
      res.status(200);
      res.send({
        message: "Product fetched Succesfully",
        success: true,
        data: allProduct,
      });
    }
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .send({ message: "Error fetching Product", success: false, error });
  }
});
const readProductByCategory = asyncHandler(async (req, res) => {
  try {
    // console.log(req.body);
    const categoryCheck = await Product.findOne({
      productCategory: req.body.data.productCategory,
    });
    if (!categoryCheck) {
      res
        .status(200)
        .send({ message: "Such category is not Availabele", success: false });
    } else {
      const product = await Product.find({
        productCategory: req.body.data.productCategory,
      });
      res.status(200).send({
        message: "succesfully fetched",
        success: true,
        data: product,
      });
    }
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .send({ message: "Error in finding Product", success: false, error });
  }
});

const updateProductStock = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findOne({
      productId: req.body.data.productId,
    });

    if (!product) {
      res.status(200).send({ message: "Product not found", success: false });
    } else {
      {
        // productStock: req.body.data.productStock;
        const newstock = req.body.data.productStock + product.productStock;
        // console.log(newstock);
        if (newstock < 0) {
          res.status(200).send({
            message: "You do not have such sufficient amount to remove",
            success: false,
          });
        } else {
          const update = await Product.findOneAndUpdate(
            {
              productId: req.body.data.productId,
            },
            { productStock: newstock }
          );
          if (!update) {
            res.status(200).send({ message: "not Updated", success: false });
          } else {
            res
              .status(200)
              .send({ message: "Updated Successfully", success: true });
          }
        }
      }
    }
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      message: "error in Updating product",
      success: false,
      error,
    });
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    // const empId = req.body.employeeId;
    console.log(req.body.data);
    const product = await Product.findOneAndRemove({
      productId: req.body.data.productId,
    });
    if (product) {
      return res.status(200).send({
        message: "Product has been deleted",
        success: true,
        data: product,
      });
    } else {
      res.status(200).send({
        message: "Such Product doesNot Exist",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "error deleting product",
      success: false,
      error,
    });
  }
});

module.exports = {
  createProduct,
  readAllProduct,
  readProductByCategory,
  updateProductStock,
  deleteProduct,
};
