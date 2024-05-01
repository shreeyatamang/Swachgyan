const mongoose = require("mongoose");

const DragDropSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
  },
  scores:{
      type: Number,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
});

const DragDropModel = mongoose.model("DragDrop", DragDropSchema);

module.exports = DragDropModel;
