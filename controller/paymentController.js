const asyncHandler = require("express-async-handler");

const { instance } = require("../server.js");

const checkOut = asyncHandler(async (req, res) => {
  const options = {
    amount: req.body.data.amount, // amount in the smallest currency unit
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  console.log(order);
  res.status(200).send({ message: "ho gya ", success: true, data: order });
});

const paymentVarification = asyncHandler(async (req, res) => {
  res.status(200).send({ message: "ho gya ", success: true });
});
module.exports = {
  checkOut,
  paymentVarification,
};
