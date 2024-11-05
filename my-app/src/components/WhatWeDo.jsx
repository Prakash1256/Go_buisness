import React from "react";
import '../stylesheets/whatwedo.css';
const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="what-we-do-2">
      <h2>WHAT WE DO</h2>
      <p>We provide the Perfect Solution to your business growth</p>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <img src="/public/images/Activity.png"/>
          <h3>Grow Your Business</h3>
          <p>We help identify the best ways to improve your business</p>
          <a href="#" className="learn-more">Learn More ➔</a>
        </div>
        <div className="service-card">
        <img src="/public/images/Heart.png"/>
          <h3>Improve Brand Loyalty</h3>
          <p>We help identify the best ways to improve your business</p>
          <a href="#" className="learn-more">Learn More ➔</a>
        </div>
        <div className="service-card">
        <img src="/public/images/Work.png"/>
          <h3>Improve Business Model</h3>
          <p>We help identify the best ways to improve your business</p>
          <a href="#" className="learn-more">Learn More ➔</a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
