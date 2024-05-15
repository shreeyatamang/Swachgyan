const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const LoginModel = mongoose.model("login", LoginSchema);

module.exports = LoginModel;