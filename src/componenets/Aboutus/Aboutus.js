import React from 'react';
import './Aboutus.css';
import kids2 from "../../assests/kids2.png";


const Aboutus = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Welcome to Swachyagyan.com</p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-6">
          <h2 style={{ marginBottom: '20px' }}>At Swachyagyan, we believe that education is the key to fostering positive change.</h2>
            <img src={kids2} className="kids2" alt="" style={{ width: '600px', height: '500px' }} />
            <p> </p>
            <p></p>
          </div>
          <div className="col-lg-6">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic"><b>
               Our Objectives:
               </b>
              </p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i>🌍.Educate children about the importance of waste management and segregation.</li>
                <li><i className="bi bi-check-circle-fill"></i>🌍.Foster a sense of environmental responsibility to young learners.</li>
                <li><i className="bi bi-check-circle-fill"></i>🌍.Inspire children to become advocates for environmental sustainability. </li>
              </ul>

              <p className="fst-italic"><b>
               Our mission:
               </b>
              </p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i>🌈.Educate children about waste management and segregation practices.</li>
                <li><i className="bi bi-check-circle-fill"></i>🌈.Empower children to make informed decisions about waste disposal and recycling.</li>
                <li><i className="bi bi-check-circle-fill"></i>🌈.Foster a culture of environmental consciousness and responsibility. </li>
              </ul>
              <p className="fst-italic"><b>
               Our Goal:
               </b>
              </p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i>🌱.Raise awareness about the importance of waste management and segregation</li>
                <li><i className="bi bi-check-circle-fill"></i>🌱.Equip children with practical knowledge and skills to implement waste management practices.</li>
                <li><i className="bi bi-check-circle-fill"></i>🌱.Foster a generation of environmentally conscious individuals.</li>
              </ul>
              <div className="text-center">
  <button className="read-more-button">Read More</button>
</div>

              <div className="position-relative mt-4">
              <img src="" className="img-fluid rounded-4" alt="" />

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;

