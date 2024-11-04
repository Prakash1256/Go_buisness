import React from 'react';
// import './OurServices.css';

function OurServices() {
  return (
    <>
     <div className="our-services">
      <h2>Our Services & Products</h2>
      <div className="service-box">
        <img src="/public/images/image 79.png" alt="Software Development" />
        <h3>Software Development Services</h3>
        <p>
          Determine the goals, features, timeline, and budget for your software project.
        </p>
      </div>
      <div className="service-box">
        <img src="/public/images/image 80.png" alt="Web Development" />
        <h3>Web Development Services</h3>
        <p>
          Range of activities involved in creating and maintaining websites for individuals, businesses,
          organizations, or other entities.
        </p>
      </div>
      <div className="service-box">
        <img src="/public/images/image 81.png" alt="Email Marketing" />
        <h3>Email Marketing Services</h3>
        <p>
          Digital marketing strategy that involves sending commercial messages,
          typically to a group of people, via email.
        </p>
      </div>
    </div>
     <div className='image-82'>
      <img src='/public/images/image 82.png'/>
    </div>
    </>
    
  );
}

export default OurServices;
