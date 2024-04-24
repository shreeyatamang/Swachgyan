import React from 'react';
import './intro.css';
import bg from "../../assests/bg.png";
import { Link }from 'react-scroll';
const Intro = () => {
  return (
    
      <section id="intro">
        <div className='introcontent'>
        <p className='IntroPara'>Welcome Waste Warriors!</p>
        <p className='IntroSecond'>"Embark on an eco-friendly journey with fun <br/>games and quizzes!"</p>
        

        </div>
        <img src={bg} alt="profile" className='bg'/>
        </section>    
    
  )
}

export default Intro;
