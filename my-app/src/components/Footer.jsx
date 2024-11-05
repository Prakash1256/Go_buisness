import React from 'react';
import '../stylesheets/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Company</h3>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Why Us?</li>
          <li>Referral Program</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Help and Support</h3>
        <ul>
          <li>Contact us</li>
          <li>Hire</li>
          <li>Premium Support</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Learning</h3>
        <ul>
          <li>Courses</li>
          <li>Tutorials</li>
          <li>Registrations</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Resources</h3>
        <ul>
          <li>Third party tools</li>
          <li>Illustrations</li>
          <li>Stock Photos</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Legal</h3>
        <ul>
          <li>Privacy Policies</li>
          <li>Terms & Conditions</li>
          <li>Cancellation & refunds</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
