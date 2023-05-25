const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connnectDB = require("./config/db.js");
const path = require("path");

const Razorpay = require("razorpay");

// dotenv config
dotenv.config();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

module.exports = {
  instance,
};

//mongodbconnection
connnectDB();

// Rest Object
const app = express();

//Middlewares
app.use(express.json());

//Cors
app.use(cors());

// routes

app.use("/api/v1/user", require("./routes/userRoutes.js"));
app.use("/api/v1/customer", require("./routes/customerRoutes.js"));
app.use("/api/v1/admin", require("./routes/adminRoutes.js"));
app.use("/api/v1/Payment", require("./routes/paymentRoutes.js"));

//rotue for key of razorpay
// port
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
  console.log(
    `Server is running at port number ${process.env.NODE_MODE} mode on port ${process.env.PORT}`
  );
});
