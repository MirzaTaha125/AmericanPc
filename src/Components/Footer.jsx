import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <h3>LOGO</h3>
            <p>
              Crafting stunning websites that elevate your brand to new heights.
            </p>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">
              <FiFacebook />
            </a>
            <a href="#" className="social-link">
              <FiTwitter />
            </a>
            <a href="#" className="social-link">
              <FiInstagram />
            </a>
            <a href="#" className="social-link">
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Logo Design</a>
            </li>
            <li>
              <a href="#">Branding</a>
            </li>
            <li>
              <a href="#">E-commerce</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <span>info@example.com</span>
            </div>
            <div className="contact-item">
              <FiMapPin className="contact-icon" />
              <span>123 Business St, City, State 12345</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
