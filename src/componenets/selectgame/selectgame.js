import React from 'react';
import { Link } from 'react-router-dom';
import './selectgame.css';
import PlayGame from '../../assests/PlayGame.png';
import binsort from '../../assests/ECOSORT.png';


const SelectGame = () => {
  return (
    <div className="image-container">
      <Link to="games">
        <img 
          src={PlayGame} 
          alt="Play Game" 
          className="choice-image"
        />
      </Link>
      <Link to="Binsort">
        <img 
          src={binsort} 
          alt="Bin Sort" 
          className="choice-image"
        />
      </Link>
    </div>
  );
};

export default SelectGame;
