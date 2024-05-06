import React from 'react';
import './Navbar.css';
import { Link }from 'react-scroll';
const Navbar = () => {
  return (
   <nav className='navbar'>
    <nav className='navbar'>
      <div className='desktopMenu'>
        <Link className='desktopMenuListItem'>
            Games
        </Link>
        <Link className='desktopMenuListItem'>
           Quizes
        </Link>
        <Link className='desktopMenuListItem'>
          About Us
        </Link>
        <Link className='desktopMenuListItem'>
           Kids Club
        </Link>
        <Link className='desktopMenuListItem'>
           Contact
        </Link>
      </div>
    </nav>
    
   </nav>
  )
}

export default Navbar;
