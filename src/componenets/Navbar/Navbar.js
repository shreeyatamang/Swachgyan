import './Navbar.css';
import { Link } from 'react-router-dom'; // Remove import from 'react-scroll'


import gameIcon from '../../assests/gameIcon.png';
import quizzesIcon from '../../assests/quizIcon.png';
import aboutUsIcon from '../../assests/aboutusIcon.png';
import contactIcon from '../../assests/contactUSICon 1.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='desktopMenu'>
        <Link to="/games" className='desktopMenuListItem'>
          <img src={gameIcon} alt="Game" className="menu-icon" />
          <span>Games</span>
        </Link>
        <Link to="/quizzes" className='desktopMenuListItem'>
          <img src={quizzesIcon} alt="Quizzes" className="menu-icon" />
          <span>Quizzes</span>
        </Link>
        <Link to="/aboutus" className='desktopMenuListItem'>
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
