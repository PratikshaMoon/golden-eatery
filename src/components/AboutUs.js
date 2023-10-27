import React from 'react';

const aboutUsPageStyles = {
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const aboutUsContentStyles = {
  width: '60%',
  margin: '0 auto',
};

const headingStyles = {
  fontSize: '28px',
  color: 'blue',
  marginBottom: '20px',
};

const paragraphStyles = {
  fontSize: '16px',
  lineHeight: '1.6',
};

const AboutUs = () => {
  return (
    <div style={aboutUsPageStyles}>
      <h1>About Us</h1>

      <div style={aboutUsContentStyles}>
        <h2 style={headingStyles}>Our Story</h2>
        <p style={paragraphStyles}>
          We are a passionate team dedicated to providing high-quality products and exceptional customer service. Our journey started in 20XX with a mission to make people's lives better by offering innovative solutions.
        </p>

        <h2 style={headingStyles}>Our Vision</h2>
        <p style={paragraphStyles}>
          Our vision is to create a world where technology empowers individuals and communities. We believe in the power of collaboration and continuous improvement to achieve this goal.
        </p>

        <h2 style={headingStyles}>Meet the Team</h2>
        <p style={paragraphStyles}>
          Our team consists of talented professionals who bring a wide range of expertise to the table. We're united by our commitment to excellence and our desire to make a positive impact.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
