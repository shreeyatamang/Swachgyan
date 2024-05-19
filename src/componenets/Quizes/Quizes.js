import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quizes.css';
import bgg from "../../assests/bgg.png";
import QzCover from "../../assests/Qz.png";

const Quizes = () => {
  const questionsData = [
    {
      id: 1,
      question: "1. What should you do with empty plastic bottles?",
      answers: [
        { text: "a. Throw them in the trash", correct: false },
        { text: "b. Recycle them", correct: true },
        { text: "c. Bury them in the garden", correct: false },
        { text: "d. Leave them on the street", correct: false }
      ]
    },
    {
      id: 2,
      question: "2. What should you do with old newspapers and magazines?",
      answers: [
        { text: "a. Burn them in the backyard", correct: false },
        { text: "b. Recycle them", correct: true },
        { text: "c. Bury them in the garden", correct: false },
        { text: "d. Leave them on the street", correct: false }
      ]
    },
    {
      id: 3,
      question: "3. What should you do with old clothes that are no longer wearable?",
      answers: [
        { text: "a. Throw them in the trash", correct: false },
        { text: "b. Use them as cleaning rags", correct: false },
        { text: "c. Donate them", correct: true },
        { text: "d. Compost them", correct: false }
      ]
    },
    {
      id: 4,
      question: "4. Which of the following materials is biodegradable?",
      answers: [
        { text: "a. Plastic Bottle", correct: false },
        { text: "b. Glass Jars", correct: false },
        { text: "c. Soap", correct: false },
        { text: "d. Apple", correct: true }
      ]
    },
    {
      id: 5,
      question: "5. Where should you dispose of hazardous household chemicals?",
      answers: [
        { text: "1. Pour them down the drain", correct: false },
        { text: "2. Throw them in the trash", correct: false },
        { text: "3. Recycle them at a local recycling center", correct: false },
        { text: "4. Take them to a hazardous waste collection facility", correct: true }
      ]
    }
  ];

  const [questions, setQuestions] = useState(questionsData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false); 
  const [quizCompleted, setQuizCompleted] = useState(false); 

  const handleCoverClick = () => {
    setShowQuiz(true); 
  };

  const handleAnswerClick = (index) => {
    const isCorrect = questions[currentQuestionIndex].answers[index].correct;
    setSelectedAnswerIndex(index);
    setShowNextButton(true);
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].answers[index].selected = true;
    updatedQuestions[currentQuestionIndex].answers[index].isCorrect = isCorrect;
    // Marking the correct answer
    updatedQuestions[currentQuestionIndex].answers.forEach((answer, i) => {
      if (answer.correct) {
        updatedQuestions[currentQuestionIndex].answers[i].selected = true;
        updatedQuestions[currentQuestionIndex].answers[i].isCorrect = true;
      }
    });
    setQuestions(updatedQuestions);
  };
  
  const handleNextClick = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setQuizCompleted(true); 
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowNextButton(false);
      setSelectedAnswerIndex(null);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach(question => {
      const answeredCorrectly = question.answers.find(answer => answer.selected && answer.correct);
      if (answeredCorrectly && !question.answers.some(answer => answer.selected && !answer.correct)) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };
  
  

  const renderCongratulations = () => {
    const score = calculateScore();
    return (
      <div className="congratulations">
        <h1>Congratulations!</h1>
        <p>You scored {score} out of {questions.length}.</p>
      </div>
    );
  };
  

  return (
    <div className="qcontainer" style={{ backgroundImage: `url(${bgg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {!showQuiz && ( 
        <div className="take-Quiz"onClick={handleCoverClick}>
          <img src={QzCover} alt="Quiz Cover" className="quiz-cover" />
        </div>
      )}

      {showQuiz && !quizCompleted && ( 
        <div>
          <h1 style={{ color: 'white' }}><b>QUIZES💡</b></h1>
          <div className="quize">
            <h2>{questions[currentQuestionIndex].question}</h2>
            <div id="answer-buttons">
              {questions[currentQuestionIndex].answers.map((answer, index) => (
                <button
                  key={index}
                  className={`btn ${selectedAnswerIndex === index ? 'selected' : ''} ${answer.selected && (answer.isCorrect ? 'correct' : 'incorrect')}`}
                  onClick={() => handleAnswerClick(index)}
                  disabled={showNextButton}
                >
                  {answer.text}
                </button>
              ))}
            </div>
            {showNextButton && <button id="next-btn" className="btn-next" onClick={handleNextClick}>Next</button>}
          </div>
        </div>
      )}

      {quizCompleted && renderCongratulations()} 
    </div>
  );
}

export default Quizes;