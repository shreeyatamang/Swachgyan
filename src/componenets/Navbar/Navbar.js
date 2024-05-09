import './Navbar.css';
<<<<<<< HEAD
import { Link } from 'react-router-dom'; // Remove import from 'react-scroll'

=======
import { Link } from 'react-scroll';
>>>>>>> 54573fe588ce915e69ce9bdc6066911db7168643

import gameIcon from '../../assests/gameIcon.png';
import quizzesIcon from '../../assests/quizIcon.png';
import aboutUsIcon from '../../assests/aboutusIcon.png';
import contactIcon from '../../assests/contactUSICon 1.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='desktopMenu'>
<<<<<<< HEAD
        <Link to="/games" className='desktopMenuListItem'>
          <img src={gameIcon} alt="Game" className="menu-icon" />
          <span>Games</span>
        </Link>
        <Link to="/quizzes" className='desktopMenuListItem'>
          <img src={quizzesIcon} alt="Quizzes" className="menu-icon" />
          <span>Quizzes</span>
        </Link>
        <Link to="/aboutus" className='desktopMenuListItem'>
=======
        <Link to="/game-page" className='desktopMenuListItem'>
          <img src={gameIcon} alt="Game" className="menu-icon" />
          <span>Games</span>
        </Link>
        <Link to="/quizzes-page" className='desktopMenuListItem'>
          <img src={quizzesIcon} alt="Quizzes" className="menu-icon" />
          <span>Quizzes</span>
        </Link>
        <Link to="/about-us" className='desktopMenuListItem'>
>>>>>>> 54573fe588ce915e69ce9bdc6066911db7168643
          <img src={aboutUsIcon} alt="About Us" className="menu-icon" />
          <span>About Us</span>
        </Link>
        <Link to="/contact" className='desktopMenuListItem'>
          <img src={contactIcon} alt="Contact" className="menu-icon" />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
