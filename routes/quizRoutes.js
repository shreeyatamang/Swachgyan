const express = require('express');
const router = express.Router();
const quizControllers = require('../controllers/quizControllers');

// Route to get quiz questions
router.get('/quizquestion', quizControllers.getQuizQuestions);

// Route to calculate score
router.post('/submit', quizControllers.calculateScore);

// Route to retrieve quiz score for a specific user
router.get('/score/:username', quizControllers.getQuizScore);

module.exports = router;
