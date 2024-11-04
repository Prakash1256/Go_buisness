// MissionVisionComponent.js
import React from 'react';

function MissionVisionComponent() {
    return (
        <div className="mission-container">
            <div className="mission-content">
                <div className="illustration">
                    {/* Replace with your own SVG or image component */}
                    <img src="/public/images/amico.png" alt="Illustration" />
                </div>
                <div className="text-content1">
                    <h2>Our Mission & Vision</h2>
                    <h3>Goo Business Industry Training Programme</h3>
                    <p>
                        At Goo Business, our mission is to provide top-quality web development,
                        mobile app development, and software engineering services to our clients.
                    </p>
                    <button className="know-more-btn">Know More</button>
                </div>
            </div>
        </div>
    );
}

export default MissionVisionComponent;
