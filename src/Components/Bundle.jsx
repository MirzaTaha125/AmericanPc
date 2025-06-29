import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";
import emailjs from "@emailjs/browser";
import ThankYouModal from "./ThankYouModal";

const BUNDLE_PACKAGES = [
  {
    name: "Logo Design",
    features: [
      "5 Original Logo Concepts",
      "2 Dedicated Logo Designers",
      "Unlimited Revisions",
      "All File Formats Provided",
    ],
    worth: "$299",
  },
  {
    name: "Website Development",
    features: [
      "5 Page Custom Website",
      "Mobile Responsive",
      "Contact/Query Form",
      "Complete Deployment",
    ],
    worth: "$799",
  },
  {
    name: "Branding Kit",
    features: [
      "Business Card Design",
      "Letterhead Design",
      "Envelope Design",
      "Social Media Kit",
    ],
    worth: "$399",
  },
];

const ACTUAL_TOTAL = "$1497";
const DISCOUNTED_TOTAL = "$499";

const Bundle = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  // Slider state
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [slideDirection, setSlideDirection] = useState(null); // 'left' or 'right'

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

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

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOrderNow = () => {
    setShowFormModal(true);
  };

  const handleFormClose = () => {
    setShowFormModal(false);
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_meniodp", // Replace with your EmailJS service ID
        "template_a1hkfvq", // Replace with your EmailJS template ID
        formRef.current,
        "UYoaxcSkke-Lmw0Zi" // Replace with your EmailJS public key
      )
      .then(
        (_result) => {
          formRef.current.reset();
          setIsSending(false);
          setShowFormModal(false);
          setShowThankYou(true);
        },
        (_error) => {
          alert("Failed to send message. Please try again.");
          formRef.current.reset();
          setIsSending(false);
        }
      );
  };

  // Slider controls with animation
  const handlePrev = () => {
    setSlideDirection("left");
    setTimeout(() => {
      setCurrentIdx((prev) =>
        prev === 0 ? BUNDLE_PACKAGES.length - 1 : prev - 1
      );
      setSlideDirection(null);
    }, 300); // match animation duration
  };
  const handleNext = () => {
    setSlideDirection("right");
    setTimeout(() => {
      setCurrentIdx((prev) =>
        prev === BUNDLE_PACKAGES.length - 1 ? 0 : prev + 1
      );
      setSlideDirection(null);
    }, 300);
  };

  return (
    <motion.section
      className="bundle-section"
      style={{
        background: "#101010",
        color: "#fff",
        padding: "60px 0",
        textAlign: "center",
        paddingTop: "150px",
        paddingBottom: "150px",
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="about-dot-row"
        style={{ justifyContent: "center", marginBottom: "1rem" }}
        variants={itemVariants}
      >
        <span className="about-dot"></span>
        <span className="about-label">Enterprise Bundle</span>
      </motion.div>
      <motion.h2
        className="bundle-title"
        style={{ fontSize: "2.2rem", fontWeight: 900, marginBottom: "2.5rem" }}
        variants={itemVariants}
      >
        The Ultimate Business Starter Pack
      </motion.h2>
      <motion.div
        className="bundle-packages"
        style={{
          display: isMobile ? "block" : "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginBottom: "2.5rem",
          position: "relative",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {isMobile ? (
          <motion.div
            style={{ position: "relative", minHeight: 340 }}
            variants={cardVariants}
            whileHover="hover"
          >
            <div
              className={`bundle-card${
                slideDirection ? ` slide-${slideDirection}` : ""
              }`}
              style={{
                background: "#fff",
                color: "#101010",
                borderRadius: 12,
                padding: "2rem",
                minWidth: 260,
                maxWidth: 320,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              }}
            >
              <div className="bundle-header" style={{ marginBottom: "1.5rem" }}>
                <span
                  className="bundle-name"
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#101010",
                  }}
                >
                  {BUNDLE_PACKAGES[currentIdx].name}
                </span>
                <div
                  className="bundle-worth"
                  style={{ marginTop: 10, color: "#666", fontSize: "1rem" }}
                >
                  Worth{" "}
                  <span style={{ color: "#101010", fontWeight: 900 }}>
                    {BUNDLE_PACKAGES[currentIdx].worth}
                  </span>
                </div>
              </div>
              <ul
                className="bundle-features"
                style={{
                  listStyle: "disc",
                  textAlign: "left",
                  color: "#101010",
                  fontSize: 14,
                  margin: 0,
                  paddingLeft: 20,
                  marginBottom: "2rem",
                }}
              >
                {BUNDLE_PACKAGES[currentIdx].features.map((feature, idx) => (
                  <li key={idx} style={{ marginBottom: 8 }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {/* Mobile Navigation Arrows */}
            <motion.button
              className="bundle-nav-btn bundle-nav-prev"
              onClick={handlePrev}
              style={{
                position: "absolute",
                left: -20,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.9)",
                border: "none",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#101010",
                cursor: "pointer",
                zIndex: 10,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>
            <motion.button
              className="bundle-nav-btn bundle-nav-next"
              onClick={handleNext}
              style={{
                position: "absolute",
                right: -20,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.9)",
                border: "none",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#101010",
                cursor: "pointer",
                zIndex: 10,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </motion.div>
        ) : (
          BUNDLE_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={idx}
              className="bundle-card"
              style={{
                backgroundColor: "#181818",
                color: "white",
                borderRadius: 12,
                padding: "2rem",
                minWidth: 260,
                maxWidth: 320,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              }}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="bundle-header" style={{ marginBottom: "1.5rem" }}>
                <span
                  className="bundle-name"
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {pkg.name}
                </span>
                <div
                  className="bundle-worth"
                  style={{ marginTop: 10, color: "white", fontSize: "1rem" }}
                >
                  Worth{" "}
                  <span style={{ color: "white", fontWeight: 900 }}>
                    {pkg.worth}
                  </span>
                </div>
              </div>
              <ul
                className="bundle-features"
                style={{
                  listStyle: "disc",
                  textAlign: "left",
                  color: "white",
                  fontSize: 14,
                  margin: 0,
                  paddingLeft: 20,
                  marginBottom: "2rem",
                }}
              >
                {pkg.features.map((feature, idx) => (
                  <li key={idx} style={{ marginBottom: 8 }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))
        )}
      </motion.div>
      <motion.div
        className="bundle-total"
        style={{
          margin: "2.5rem 0 1.5rem 0",
          fontSize: "1.3rem",
          fontWeight: 700,
        }}
        variants={itemVariants}
      >
        <span
          style={{
            color: "#aaa",
            textDecoration: "line-through",
            marginRight: 16,
          }}
        >
          Total {ACTUAL_TOTAL}
        </span>
        <span style={{ color: "#fff", fontSize: "2rem", fontWeight: 900 }}>
          Now {DISCOUNTED_TOTAL}
        </span>
      </motion.div>
      <motion.button
        className="order-now-btn"
        onClick={handleOrderNow}
        style={{
          margin: "0 auto",
          display: "block",
          background: "#fff",
          color: "#101010",
          fontWeight: 700,
          fontSize: "1.1rem",
          borderRadius: 30,
          padding: "16px 20px",
          border: "none",
          boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
          marginBottom: 8,
        }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Order Now
      </motion.button>
      <div
        style={{
          color: "#CA0F38",
          fontWeight: 600,
          fontSize: "1rem",
          marginTop: 0,
        }}
      >
        Limited time offer
      </div>
      {/* Order Form Modal */}
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
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              Order Bundle
            </motion.h1>
            <motion.p
              className="form_subheading"
              variants={itemVariants}
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
                {isSending ? "Sending..." : "Order Bundle"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
      <ThankYouModal isOpen={showThankYou} onClose={handleThankYouClose} />
    </motion.section>
  );
};

export default Bundle;
