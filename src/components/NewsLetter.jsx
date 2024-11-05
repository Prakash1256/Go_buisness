import React from 'react';
import '../stylesheets/news.css';

function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
         <div className='newsletter-content1'>
         <div className="image-placeholder">
          <img src='/images/Group 8.png' alt="Newsletter" />
        </div>
        
        <div className='content-title'>
          <h2 className="title">
            GET OUR WEEKLY <span className="highlight">NEWSLETTER</span>
          </h2>
          <p className="description">
            Get weekly updates on the newest updates, courses, and tips right in your mailbox.
            </p>
            <strong className='subscribe'> Subscribe now!</strong>
        </div>
         </div>
      
        
        <div className="input-group">
          <input type="email" placeholder="Email Address" className="email-input" />
          <button className="subscribe-button">SUBSCRIBE</button>
        </div>
        
        <p className="footer-text">Your email is safe with us, we don’t spam.</p>
      </div>
    </div>
  );
}

export default Newsletter;
