import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ThankYouModal from "../Components/ThankYouModal";
import emailjs from "@emailjs/browser";
import earth from "../assets/earth.webp";

const AboutUs = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
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

  const handleGetStarted = () => {
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

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects" },
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "Delivering outstanding results that exceed expectations.",
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Embracing cutting-edge technology and creative solutions.",
    },
    {
      icon: "⚡",
      title: "Speed",
      description: "Fast, efficient solutions without compromising quality.",
    },
  ];

  return (
    <motion.div
      className="about-us-page"
      key="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.3,
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="about-hero-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.3,
          delayChildren: 0.1,
        }}
      >
        <motion.div className="about-dot-row" variants={itemVariants}>
          <span className="about-dot"></span>
          <span className="about-label">About Us</span>
        </motion.div>
        <motion.h1 className="about-hero-title" variants={itemVariants}>
          We Create Digital Experiences That Matter
        </motion.h1>
        <motion.p className="about-hero-subtitle" variants={itemVariants}>
          Empowering businesses with innovative web solutions and strategic
          digital marketing.
        </motion.p>
        <motion.div className="earth-image-container" variants={imageVariants}>
          <img src={earth} alt="Earth" className="earth-image" />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="stats-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        className="story-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="about-dot-row" variants={itemVariants}>
          <span className="about-dot"></span>
          <span className="about-label">Our Story</span>
        </motion.div>
        <motion.h2 className="section-title" variants={itemVariants}>
          From Vision to Reality
        </motion.h2>
        <motion.div className="story-content" variants={itemVariants}>
          <div className="story-text">
            <p>
              Founded in 2014, we started with a mission to help businesses
              thrive in the digital age. What began as a small team has grown
              into a full-service digital agency serving clients worldwide.
            </p>
            <p>
              We believe every business deserves a powerful online presence that
              drives real results. Our approach combines technology with
              creative design to deliver solutions that make a difference.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="values-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="about-dot-row" variants={itemVariants}>
          <span className="about-dot"></span>
          <span className="about-label">Our Values</span>
        </motion.div>
        <motion.h2 className="section-title" variants={itemVariants}>
          What Drives Us Forward
        </motion.h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* CTA Section */}
      <motion.section
        className="about-cta-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="cta-content" variants={itemVariants}>
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-subtitle">
            Let's work together to bring your vision to life.
          </p>
          <motion.button
            className="cta-button"
            onClick={handleGetStarted}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </motion.section>

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
              Get Started
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
                {isSending ? "Sending..." : "Get Started"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}

      <ThankYouModal isOpen={showThankYou} onClose={handleThankYouClose} />
      <Footer />
    </motion.div>
  );
};

export default AboutUs;
