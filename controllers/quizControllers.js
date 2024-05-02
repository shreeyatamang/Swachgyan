const Quiz = require('../models/quizmodel');

// Controller to fetch quiz questions
exports.getQuizQuestions = async (req, res) => {
  try {
    const quizQuestions = await Quiz.find();
    res.json(quizQuestions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to calculate and return the score
exports.calculateScore = async (req, res) => {
  try {
    const submittedAnswers = req.body.answers; // Array of user submitted answers
    const quizQuestions = await Quiz.find();
    let score = 0;

    quizQuestions.forEach((question, index) => {
      if (submittedAnswers[index] === question.correctAnswerIndex) {
        score++;
      }
    });

    res.json({ score });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
