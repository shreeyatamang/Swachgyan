import React, { useState, useEffect } from 'react';
import './Footer.css'; 

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setShowFooter(isBottom);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer style={{ display: showFooter ? 'block' : 'none' }}>
      <div className="footer-content">
        <div className="footer-left">
          <span className="name">Swachyagyan</span>
        </div>
        <div className="footer-right">
      
          <div className="contact-section">
            <h3>Swachagyan</h3>
            <p>Email: swachgyan@swachgyan.com</p>
            <p>Phone: +977 987654321</p>
         
          </div>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
