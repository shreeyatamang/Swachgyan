const express = require('express');
const router = express.Router();
const quizControllers = require('../controllers/quizControllers');

// Route to get quiz questions
router.get('/quizquestion', quizControllers.getQuizQuestions);

// Route to calculate score
router.post('/submit', quizControllers.calculateScore);

module.exports = router;
