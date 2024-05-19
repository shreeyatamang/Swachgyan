import React from 'react';
import { Link } from 'react-router-dom';
import './SelectChoice.css';
import PlayGame from '../../assests/PlayGame.png';
import takeQuiz from '../../assests/takeQuiz.png';


const SelectChoice = () => {
  return (
    <div className="image-container">
      <Link to="Games">
        <img 
          src={PlayGame} 
          alt="Play Game" 
          className="choice-image"
        />
      </Link>
      <Link to="quizzes">
        <img 
          src={takeQuiz} 
          alt="Take Quiz" 
          className="choice-image"
        />
      </Link>
    </div>
  );
};

export default SelectChoice;
