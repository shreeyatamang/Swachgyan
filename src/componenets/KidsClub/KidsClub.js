// KidsClub.js
import React from 'react';
import { Link } from 'react-router-dom';
import './KidsClub.css'; // Import CSS file if necessary
import challenge from '../../assests/challenge.png';


const KidsClub = () => {
  return (
    <div className="kcontainer">
      <div className="background">
      <div className="section-left">
          <h2>Welcome to Kids Club</h2>
          <p>Hey there, crafty kids! 🎨✂️ Welcome to KidsClub, where the fun never stops and creativity rules! 🌟<br/><br/>
            Got a super cool craft you want to share? Awesome! We've got monthly crafting challenges just for you.🎉 Whether you're into painting, building, or making things sparkle, there's a challenge waiting for your awesome skills!<br/><br/> 💪<br/>
            So, if you've made something awesome and want to show it off, just upload your craft below.<br/><br/>📸 Let's fill our gallery with your fantastic creations and inspire each other to make even more amazing stuff! 🚀<br/>
            Let's get crafting, KidsClub style! 🎉🎨</p>
            <Link to="/signup"><button className="button">Sign Up</button></Link> &nbsp;
          <Link to="/login"><button className="button">Login</button></Link>
        </div>
        <div className="section-right">
          <h2>This Month's Challenge</h2>
          <p>Join our exciting challenge this month!</p>
          <img src={challenge} alt="This Month's Challenge"/>
          
        </div>
      </div>
    </div>
  );
}

export default KidsClub;