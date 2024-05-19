import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import IntroIcon from "../../assests/IntroIcon.png";
import gameIcon from "../../assests/gameIcon.png";
import quizzesIcon from "../../assests/quizIcon.png";
import KidsClubIcon from "../../assests/kcLogo.png";
import learnmoreIcon from "../../assests/learnmoreIcon.png";
import logo from '../../assests/logo.png'; 


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-icon" />
        </Link>
      </div>
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem">
          <img src={IntroIcon} alt="Home" className="menu-icon" />
          <span>Home</span>
        </Link>
        <Link to="/Games" className="desktopMenuListItem">
          <img src={gameIcon} alt="Game" className="menu-icon" />
          <span>Games</span>
        </Link>
        <Link to="/quizzes" className="desktopMenuListItem">
          <img src={quizzesIcon} alt="Quizzes" className="menu-icon" />
          <span>Quizzes</span>
        </Link>
        <Link to="/learnmore" className="desktopMenuListItem">
          <img src={learnmoreIcon} alt="learnmore" className="menu-icon" />
          <span>learnmore</span>
        </Link>

        <Link to="/KidsClub" className="desktopMenuListItem">
          <img src={KidsClubIcon} alt="Kids Club" className="menu-icon" />
          <span>Kids Club</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
