const asyncHandler = require("express-async-handler");

const { instance } = require("../server.js");

const checkOut = asyncHandler(async (req, res) => {
  const options = {
    amount: Number(req.body.data.amount * 100), // amount in the smallest currency unit
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  // console.log(order);
  res.status(200).send({ message: "ho gya ", success: true, data: order });
});

const paymentVarification = asyncHandler(async (req, res) => {
  console.log(req.body);
  // res.status(200).send({ message: "verify ho gya ", success: true });

  const authenticate = 1;
  if (authenticate) {
    // res.redirect(`http://localhost:3000/paymentSuccess?reference=${razorpay_paymentID}`)
    res.redirect(`http://localhost:3000`);
  } else {
    res.status(200).send({ message: "Verified succesfully" });
  }
});

module.exports = {
  checkOut,
  paymentVarification,
};
