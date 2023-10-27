import React from 'react';

const contactUsStyles = {
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const contactInfoStyles = {
  marginBottom: '20px',
};

const contactFormStyles = {
  width: '50%',
  margin: '0 auto',
};

const Contact = () => {
  return (
    <div style={contactUsStyles}>
      <h1>Contact Us</h1>

      <div style={contactInfoStyles}>
        <h2>Pratiksha Moon</h2>
        <p>Email: prateekshamoon@gmail.com</p>
        <p>Phone: (+91) 9021737370</p>
        <p>Address: 123 Main Street, Mumbai, India</p>
      </div>

      <div style={contactFormStyles}>
        <h2>Contact Form</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" style={{ width: '100%' }} required />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" style={{ width: '100%' }} required />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" style={{ width: '100%' }} required></textarea>
          </div>

          <button type="submit" style={{ background: 'blue', color: 'white', padding: '10px 20px', border: 'none' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
