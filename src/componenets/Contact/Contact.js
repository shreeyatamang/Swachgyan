import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="Tcontainer" data-aos="fade-up">
        <div className="section-header">
          <h2>TALK TO US!</h2>
          <p></p>
        </div>
        <div className="row gx-lg-4 gy-4">
          <div className="col-lg-6">
            <div className="info-container">

            </div>
          </div>
          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="col-md-12 form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="col-md-12 form-group">
                  <textarea className="form-control" name="message" rows="7" placeholder="Message" required></textarea>
                </div>
                <div className="col-md-12">
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;










