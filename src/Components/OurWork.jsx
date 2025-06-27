import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import img1 from "../assets/Website_Portfolio/dg8ife7k2vmwltperr7f.webp";
import img2 from "../assets/Website_Portfolio/ue5pbkstgyyxhsbuafw7.webp";
import img3 from "../assets/Website_Portfolio/heulngkjcvew0yvxw0wo.webp";
import img4 from "../assets/Website_Portfolio/ekvvyj8nsptbi9tedpop.webp";
import img5 from "../assets/Website_Portfolio/vqzl4mgvv3vbuffeqzsz.webp";
import img6 from "../assets/Website_Portfolio/erryy0icgxi5csu2cvei.webp";
import img7 from "../assets/Website_Portfolio/evvixafk5uxh3mswenmu.webp";
import img8 from "../assets/Website_Portfolio/mjfsez9g69mgfvzpjhtd.webp";
import img9 from "../assets/Website_Portfolio/gmwndtlyvsiqeupvrtvy.webp";
import img10 from "../assets/Website_Portfolio/tvzqine8llbhsfslrqes.webp";
import OurPackage from "./OurPackage";

const TABS = [
  { label: "Website Development", key: "web" },
  { label: "Logo Design", key: "logo" },
];

const WORKS = {
  web: [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 },
  ],
  logo: [
    { id: 1, img: "https://via.placeholder.com/200x200?text=Logo+1" },
    { id: 2, img: "https://via.placeholder.com/200x200?text=Logo+2" },
    { id: 3, img: "https://via.placeholder.com/200x200?text=Logo+3" },
  ],
};

const OurWork = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [activePackageTab, setActivePackageTab] = useState("website");
  const [selectedImg, setSelectedImg] = useState(null);
  const [showImgModal, setShowImgModal] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const tabVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  // Determine if mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
  const imagesToShow = isMobile
    ? WORKS[activeTab].slice(0, 4)
    : WORKS[activeTab];

  const handleImgClick = (img) => {
    setSelectedImg(img);
    setShowImgModal(true);
  };

  const closeImgModal = () => {
    setShowImgModal(false);
    setSelectedImg(null);
  };

  return (
    <>
      <motion.section
        className="ourwork-section"
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
          <span className="about-label">Our Work</span>
        </motion.div>
        <motion.h2 className="ourwork_overadecade" variants={itemVariants}>
          Over a Decade of Experience, Infinite Innovation.
        </motion.h2>
        <motion.div
          className="ourwork-tabs"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {TABS.map((tab) => (
            <motion.button
              key={tab.key}
              className={`ourwork-tab${activeTab === tab.key ? " active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
              variants={tabVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          className="ourwork-gallery"
          variants={galleryVariants}
          initial="hidden"
          animate="visible"
        >
          {imagesToShow.map((work) => (
            <motion.div
              className={`ourwork-item${
                activeTab === "web" ? " scroll-on-hover" : ""
              }`}
              key={work.id}
              variants={imageVariants}
              whileHover="hover"
            >
              <div className="ourwork-img-container">
                <img
                  src={work.img}
                  alt="Website Work"
                  className="ourwork-img"
                  onClick={() => handleImgClick(work.img)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      {showImgModal && (
        <motion.div
          className="modal-overlay"
          onClick={closeImgModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            style={{ maxWidth: 400, padding: 0 }}
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="modal-header">
              <button className="modal-close" onClick={closeImgModal}>
                ×
              </button>
            </div>
            <div className="modal-body" style={{ padding: 0 }}>
              <img
                src={selectedImg}
                alt="Work"
                style={{ width: "100%", borderRadius: 12 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
      <OurPackage />
    </>
  );
};

export default OurWork;
