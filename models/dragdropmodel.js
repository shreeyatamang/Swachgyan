const mongoose = require("mongoose");

const DragDropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  scores: [{
    score: {
      type: Number,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  }],
});

const DragDropModel = mongoose.model("DragDrop", DragDropSchema);

module.exports = DragDropModel;
