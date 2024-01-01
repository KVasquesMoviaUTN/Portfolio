import React from 'react';
import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 class="contact">Contacto</h2>
      <div className="contact-options">
        <p>
          <a href="tel:+5401139276499" className="phone-link">
            +54 011 3927 6499
          </a>
        </p>
        <p>
          <a href="mailto:kalilvasquesmovia@gmail.com" className="email-link">
            kalilvasquesmovia@gmail.com
          </a>
        </p>
        <p>
          <a className="linkedin-link" href="https://www.linkedin.com/in/kalil-vasques-movia" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;