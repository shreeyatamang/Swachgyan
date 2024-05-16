import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate message length (max 100 words)
    const wordCount = formData.message.trim().split(/\s+/).length;
    if (wordCount > 100) {
      setStatusMessage('Message should not exceed 100 words.');
      return;
    }

    axios.post('http://localhost:3001/contact/submit', formData)
      .then((response) => {
        if (response.status === 200) {
    
          alert('Your message has been delivered.');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setStatusMessage('Your message has been sent. Thank you!');
        } else {
          setStatusMessage('Failed to send message.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setStatusMessage('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p></p>
        </div>
        <div className="row gx-lg-4 gy-4">
          <div className="col-lg-6">
            <div className="info-container">
              <div className="info-item">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h4>Location 📍:</h4>
                  <p>Nayabazar, Kathmandu</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-envelope"></i>
                <div>
                  <h4>Email✉️:</h4>
                  <p>Swachyagyan@example.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-phone"></i>
                <div>
                  <h4>Call📞:</h4>
                  <p>+977 987654321</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-clock"></i>
                <div>
                  <h4>Open Hours🕒:</h4>
                  <p>Mon-Sat: 11AM - 23PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 form-container">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    id="email" 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    name="subject" 
                    id="subject" 
                    placeholder="Subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="col-md-12 form-group">
                  <textarea 
                    className="form-control" 
                    name="message" 
                    id="message" 
                    rows="7" 
                    placeholder="Message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message">{statusMessage}</div>
                    <div className="sent-message">{statusMessage}</div>
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
