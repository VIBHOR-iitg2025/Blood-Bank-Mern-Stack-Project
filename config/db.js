const mongoose = require("mongoose");
const colors = require("colors");
require('dotenv').config({ path: './config/.env' });

// console.log(process.env.MONGO_URL)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
