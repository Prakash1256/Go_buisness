import React, { useState } from "react";
import "../stylesheets/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/image1.png" alt="Logo" />
      </div>

      <div className="navbar-hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" className="active" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#courses" onClick={closeMenu}>
            Courses
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>

      <button className="navbar-button">Try for free</button>
    </nav>
  );
};

export default Navbar;
