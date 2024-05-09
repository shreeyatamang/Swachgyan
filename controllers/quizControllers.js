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

// Controller to retrieve the quiz score for a specific user
exports.getQuizScore = async (req, res) => {
  try {
    const username = req.params.username;

    // Find the user by username and get their quiz score
    const user = await LoginModel.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Assuming you have a field in the user document to store quiz score
    const quizScore = user.quizScore || 0;

    res.json({ username, quizScore });
  } catch (err) {
    console.error('Error retrieving quiz score:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
