import React from 'react';
import './Intro.css';
import bg from "../../assests/bg.png";
import { Link }from 'react-scroll';
const Intro = () => {
  return (
    
      <section id="intro">
        <div className='introcontent'>
        <p className='IntroPara'></p>
        <p className='IntroSecond'></p>
        

        </div>
        <img src={bg} alt="profile" className='bg'/>
        </section>    
    
  )
}

export default Intro;
