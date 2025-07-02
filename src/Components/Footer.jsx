import React from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import mainLogo from "../assets/main_logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img
              src={mainLogo}
              alt="American Design Eagle Logo"
              style={{
                height: 80,
                width: "auto",
                objectFit: "contain",
                marginBottom: 8,
              }}
            />
            <p>
              Crafting stunning websites that elevate your brand to new heights.
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            <li>
              <Link to="/web-development-service">Web Design</Link>
            </li>
            <li>
              <Link to="/logo-service">Logo Design</Link>
            </li>
            <li>
              <Link to="/branding-service">Branding</Link>
            </li>
            <li>
              <Link to="/ecommerce-service">E-commerce</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <span>+1 (832) 737-1637</span>
            </div>
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <span>info@americandesigneagle.com</span>
            </div>
            <div className="contact-item">
              <FiMapPin className="contact-icon" />
              <span>13643 Padgett Dr, Sugar Land, TX 77498, United States</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            &copy; {currentYear} American Design Eagle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
