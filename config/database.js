const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/techwebsite";

const connectToMongoDB = async () => {
  try {
    mongoose.connect(uri);
    console.error("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
};

module.exports = connectToMongoDB;
