import React, { useState } from "react";
import "./navbar.css";
import b2ylogo from "../../assets/logos/b2ylogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
  
        <div className="nav-logo">
          <img src={b2ylogo} alt="B2Y Logo" className="logo-img" />
          <span className="logo-text">You Believe We Achieve</span>
        </div>

    
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
        </div>

    
        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#careers">Careers</a></li>
          <li>
            <button className="contact-btn">Contact Us</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
