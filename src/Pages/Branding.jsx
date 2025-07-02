import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { PACKAGES } from "../Components/OurPackage";
import emailjs from "@emailjs/browser";

const BRANDING_PACKAGES = PACKAGES.branding;

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

const modalVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const Branding = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const formRef = useRef();

  const handleOrderNow = () => setShowFormModal(true);
  const handleFormClose = () => setShowFormModal(false);
  const handleThankYouClose = () => setShowThankYou(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_meniodp",
        "template_a1hkfvq",
        formRef.current,
        "UYoaxcSkke-Lmw0Zi"
      )
      .then(
        () => {
          formRef.current.reset();
          setIsSending(false);
          setShowFormModal(false);
          setShowThankYou(true);
        },
        () => {
          alert("Failed to send message. Please try again.");
          formRef.current.reset();
          setIsSending(false);
        }
      );
  };

  return (
    <>
      <Navbar />
      <section className="packages-section">
        <div
          className="about-dot-row"
          style={{ justifyContent: "center", marginBottom: "1rem" }}
        >
          <span className="about-dot"></span>
          <span className="about-label">Branding Packages</span>
        </div>
        <h2 className="packages-title">Build a Cohesive, Powerful Brand.</h2>
        <div className="packages-list container">
          {BRANDING_PACKAGES.map((pkg, idx) => (
            <motion.div
              className="package-card"
              key={pkg.name + idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
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
                onClick={handleOrderNow}
              >
                Order Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
      {showFormModal && (
        <motion.div
          className="order-modal-overlay"
          onClick={handleFormClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="order-modal-content"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <button className="order-modal-close" onClick={handleFormClose}>
              ×
            </button>
            <motion.h1
              className="form_heading"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              Order Package
            </motion.h1>
            <motion.p
              className="form_subheading"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              Fill the form to get started
            </motion.p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="order-modal-form"
            >
              <input type="text" placeholder="Name" name="user_name" required />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                type="number"
                placeholder="Phone No"
                name="user_phone"
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSending ? "Sending..." : "Order Now"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  );
};

export default Branding;
