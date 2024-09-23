import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h3>Contact Me</h3>
      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
      <div className="social-links">
        <a href="mailto:your-email@example.com">Email</a>
        <a href="https://github.com/your-github">GitHub</a>
        <a href="https://linkedin.com/in/your-linkedin">LinkedIn</a>
      </div>
    </div>
  );
};

export default Contact;