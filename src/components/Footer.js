import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/terms">Terms and Conditions</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>
      <p>&copy; 2024 Astrology Consultation. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
