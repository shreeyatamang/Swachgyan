import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Welcome to Swachyagyan.com, where we are dedicated to educating and inspiring children to become champions of waste management and segregation</p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-6">
            <h3> At Swachyagyan, we believe that education is the key to fostering positive change.</h3>
            <img src="/assets/kids2.png" className="" alt="" />

            <p></p>
            <p></p>
          </div>
          <div className="col-lg-6">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
              Objectives:
              </p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i>1.Educate children about the importance of waste management and segregation.</li>
                <li><i className="bi bi-check-circle-fill"></i>2.Foster a sense of environmental responsibility and stewardship among young learners</li>
                <li><i className="bi bi-check-circle-fill"></i>3.Collaborate with schools, organizations, and experts to enhance the reach and impact of our educational initiatives. </li>
              </ul>
              <p>
                
              </p>

              <div className="position-relative mt-4">
              <img src="/assets/fotorai.png" className="img-fluid rounded-4" alt="" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;

