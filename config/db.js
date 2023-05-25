const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

const connnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected", conn.connection.host);
  } catch (error) {
    console.log(error.message, "chall haatt");
  }
};
module.exports = connnectDB;
