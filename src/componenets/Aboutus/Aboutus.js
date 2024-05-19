import React from 'react';
import './Aboutus.css';
import kids2 from "../../assests/kids2.png";

const Aboutus = () => {
  return (
    <section id="about" className="about" style={{ backgroundColor: 'rgb(255, 253, 208)' }}>
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Welcome to Swachyagyan.com</p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="content ps-0 ps-lg-5">
              <h2 style={{ marginBottom: '20px' }}>At Swachyagyan, we believe that education is the key to fostering positive change.</h2>
            
              <p className="fst-italic"><b>Our mission:</b></p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i>🌈.Educate children about waste management and segregation practices.</li>
     
              </ul>
              <br></br>
              <p className="fst-italic"><b>Our Goal:</b></p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i>🌱.Raise awareness about the importance of waste management and segregation</li>
        
              </ul>
              <br></br>
              <div className="text-center">
                <button className="lead-more-button">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={kids2} className="kids2" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
