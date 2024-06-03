const mongoose = require("mongoose");
const colors = require("colors");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Database!".bgYellow.bold);
  } catch (error) {
    console.log(error.bgRed.bold);
  }
};

module.exports = dbConnect;
