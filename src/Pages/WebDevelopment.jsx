import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer";
import { PACKAGES } from "../Components/OurPackage";

const WEBSITE_PACKAGES = PACKAGES.website;

const cardVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  hover: {
    y: -5,
    transition: { duration: 0.3 },
  },
};

const WebDevelopment = () => {
  return (
    <>
      <Navbar />
      <section className="packages-section">
        <div
          className="about-dot-row"
          style={{ justifyContent: "center", marginBottom: "1rem" }}
        >
          <span className="about-dot"></span>
          <span className="about-label">Web Development Packages</span>
        </div>
        <h2 className="packages-title">
          Smart Solutions. Seamlessly Packaged.
        </h2>
        <div className="packages-list container">
          {WEBSITE_PACKAGES.map((pkg, idx) => (
            <motion.div
              className="package-card"
              key={pkg.name + idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="package-header">
                <span className="package-name">{pkg.name}</span>
                <div className="package-prices">
                  <span className="package-now">{pkg.now}</span>
                  <span className="package-was">{pkg.was}</span>
                </div>
              </div>
              <div className="package-features-scroll">
                <ul className="package-features">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <motion.button
                className="order-now-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WebDevelopment;
