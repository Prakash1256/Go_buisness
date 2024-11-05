import React from "react";
import '../stylesheets/course.css';

function Courses() {
  return (
    <div className="courses-section">
      <h2>Explore the Go Courses</h2>
      <div className="courses-container">
        <div className="course-card">
          <img
            src="/images/Rectangle 3468089.png" 
            alt="Front-End (Client-Side)"
            className="course-image"
          />
          <h3>Front-End (Client-Side)</h3>
          <p className="reviews">
            <span className="stars">★★★★★</span> (15 Reviews)
          </p>
          <p className="batch-limit">Batch Limit: 100 Seats</p>
          <div className="price-section">
            <span className="discounted-price">$70</span>
            <span className="original-price">$90</span>
          </div>
          <a className="learn-more-btn">Learn More</a>
        </div>

        <div className="course-card">
          <img
            src="/images/Rectangle 3468090.png"
            alt="Back-End (Server-Side)"
            className="course-image"
          />
          <h3>Back-End (Server-Side)</h3>
          <p className="reviews">
            <span className="stars">★★★★★</span> (15 Reviews)
          </p>
          <p className="batch-limit">Batch Limit: 100 Seats</p>
          <div className="price-section">
            <span className="discounted-price">$70</span>
            <span className="original-price">$90</span>
          </div>
          <a className="learn-more-btn">Learn More</a>
        </div>

        <div className="course-card">
          <img
            src="/images/Rectangle 3468091.png" 
            alt="Full Stack Classes"
            className="course-image"
          />
          <h3>Full Stack Classes</h3>
          <p className="reviews">
            <span className="stars">★★★★★</span> (15 Reviews)
          </p>
          <p className="batch-limit">Batch Limit: 100 Seats</p>
          <div className="price-section">
            <span className="discounted-price">$70</span>
            <span className="original-price">$90</span>
          </div>
          <a className="learn-more-btn">Learn More</a>
        </div>

        <div className="course-card">
          <img
            src="/images/Rectangle 3468089.png" 
            alt="Placeholder Course"
            className="course-image"
          />
          <h3>Some Other Course</h3>
          <p className="reviews">
            <span className="stars">★★★★★</span> (15 Reviews)
          </p>
          <p className="batch-limit">Batch Limit: 100 Seats</p>
          <div className="price-section">
            <span className="discounted-price">$70</span>
            <span className="original-price">$90</span>
          </div>
          <a className="learn-more-btn">Learn More</a>
        </div>
      </div>
    </div>
  );
}





export default Courses;
