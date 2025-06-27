import React from "react";
import { motion } from "framer-motion";
import earth from "../assets/earth.webp";
import BrandSlider from "./BrandSlider";

const About = () => {
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

  return (
    <motion.section
      className="about-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="about-dot-row" variants={itemVariants}>
        <span className="about-dot"></span>
        <span className="about-label">What we do</span>
      </motion.div>
      <motion.h2 className="about-main-heading" variants={itemVariants}>
        Empowering 500+ brands to thrive
      </motion.h2>
      <motion.div className="earth-image-container" variants={imageVariants}>
        <img src={earth} alt="Earth" className="earth-image" />
      </motion.div>
      <BrandSlider />
    </motion.section>
  );
};

export default About;
