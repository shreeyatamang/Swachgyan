const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    maxlength: 100, 
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const ContactModel = mongoose.model("Contact", ContactSchema);

module.exports = ContactModel;
