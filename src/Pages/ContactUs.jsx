import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ThankYouModal from "../Components/ThankYouModal";
import emailjs from "@emailjs/browser";
import earth from "../assets/earth.webp";

const ContactUs = () => {
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
          setShowThankYou(true);
        },
        (_error) => {
          alert("Failed to send message. Please try again.");
          formRef.current.reset();
          setIsSending(false);
        }
      );
  };

  return (
    <motion.div
      className="contact-us-page"
      key="contact-page"
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
        className="contact-hero-section"
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
          <span className="about-label">Contact Us</span>
        </motion.div>
        <motion.h1 className="contact-hero-title" variants={itemVariants}>
          Let's Start a Conversation
        </motion.h1>
        <motion.p className="contact-hero-subtitle" variants={itemVariants}>
          Ready to bring your vision to life? Get in touch with us today.
        </motion.p>
        <motion.div className="earth-image-container" variants={imageVariants}>
          <img src={earth} alt="Earth" className="earth-image" />
        </motion.div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="contact-form-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="about-dot-row" variants={itemVariants}>
          <span className="about-dot"></span>
          <span className="about-label">Send Message</span>
        </motion.div>
        <motion.h2 className="section-title" variants={itemVariants}>
          Tell Us About Your Project
        </motion.h2>
        <motion.div className="contact-form-container" variants={itemVariants}>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="user_name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="user_email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="tel"
                placeholder="Your Phone"
                name="user_phone"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                name="message"
                rows="6"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="contact-submit-btn"
              disabled={isSending}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </motion.section>

      {/* Social Links Section */}

      <ThankYouModal isOpen={showThankYou} onClose={handleThankYouClose} />
      <Footer />
    </motion.div>
  );
};

export default ContactUs;
