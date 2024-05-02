const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctAnswerIndex: {
    type: Number,
    required: true
  }
});

const QuizModel = mongoose.model('Quiz', QuizSchema);

module.exports = QuizModel;
