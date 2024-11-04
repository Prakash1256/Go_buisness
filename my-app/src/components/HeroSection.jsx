import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="text-content">
        <h1>Welcome!!!</h1>
        <h2>Here Innovation Meets <span className="highlight">Growth</span></h2>
        <p>
          Go business is a one-stop solution for all your problems related to
          growing your business online. Here we build a spontaneous digital
          product for your business!
        </p>
        <div className="button-group">
          <button className="primary-button">Find courses</button>
          <button className="secondary-button">Pricing & FAQ</button>
        </div>
      </div>
      <div className="image-content">
        <img src="/public/images/group.png" alt="Woman at computer" />
      </div>
    </div>
  );
};

export default HeroSection;
