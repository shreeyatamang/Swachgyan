import React, { useState } from 'react';
import './Quizes.css';
import bk from "../../assests/bk.png";

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

  const handleAnswerClick = (index) => {
    setSelectedAnswerIndex(index);
    setShowNextButton(true);
  };

  const handleNextClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowNextButton(false);
    setSelectedAnswerIndex(null);
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${bk})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 style={{ color: 'white' }}><b>QUIZES💡</b></h1>

      <div className="quize">
        <h2>{questions[currentQuestionIndex].question}</h2>
        <div id="answer-buttons">
          {questions[currentQuestionIndex].answers.map((answer, index) => (
            <button 
              key={index} 
              className={`btn ${selectedAnswerIndex === index ? 'selected' : ''}`} 
              onClick={() => handleAnswerClick(index)} 
              disabled={showNextButton}
            >
              {answer.text}
            </button>
          ))}
        </div>
        {showNextButton && <button id="next-btn" onClick={handleNextClick}>Next</button>}
      </div>
    </div>
  );
}

export default Quizes;


















