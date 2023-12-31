import React from 'react';
import './styles/Contact.css';

const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <p>
        Para cualquier consulta, llámame al{' '}
        <a href="tel:+5401139276499" className="phone-link">
          +54 011 3927 6499
        </a>
      </p>
      <p>
        Para cualquier consulta, envíame un correo electrónico:{' '}
        <a href="mailto:kalilvasquesmovia@gmail.com" className="email-link">
          kalilvasquesmovia@gmail.com
          </a>
      </p>
      <p>
        Conéctate conmigo en LinkedIn:{' '}
        <a className="linkedin-link" href="https://www.linkedin.com/in/kalil-vasques-movia" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
      </p>

    </div>
  );
};

export default Contact;