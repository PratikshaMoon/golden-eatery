import React from 'react';

const footerStyles = {
  backgroundColor: '#333', // Background color
  color: '#fff', // Text color
  padding: '20px 0', // Padding top and bottom, no left-right padding
  textAlign: 'center',
};

const Footer = () => {
  return (
    <div style={footerStyles}>
      <p>&copy; 2023 The Eatery</p>
      <p>Contact: prateekshamoon@gmail.com</p>
    </div>
  );
};

export default Footer;
