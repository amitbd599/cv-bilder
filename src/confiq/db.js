//external import
const mongoose = require("mongoose");

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log(" DB Connected Successfully...");
  } catch (error) {
    console.log(error);
    console.log(" DB Connected Failure...");
  }
};

module.exports = connectDB;
