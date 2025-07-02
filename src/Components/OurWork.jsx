import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import img1 from "../assets/Website_Portfolio/dg8ife7k2vmwltperr7f.webp";
import img2 from "../assets/Website_Portfolio/ue5pbkstgyyxhsbuafw7.webp";
import img3 from "../assets/Website_Portfolio/heulngkjcvew0yvxw0wo.webp";
import img4 from "../assets/Website_Portfolio/ekvvyj8nsptbi9tedpop.webp";
import img7 from "../assets/Website_Portfolio/evvixafk5uxh3mswenmu.webp";
import img8 from "../assets/Website_Portfolio/mjfsez9g69mgfvzpjhtd.webp";
import img9 from "../assets/Website_Portfolio/gmwndtlyvsiqeupvrtvy.webp";
import img10 from "../assets/Website_Portfolio/tvzqine8llbhsfslrqes.webp";
import imgLogo1 from "../assets/logo-portfolio/4-3-1.webp";
import imgLogo2 from "../assets/logo-portfolio/8-3.webp";
import imgLogo3 from "../assets/logo-portfolio/7-4.webp";
import imgLogo4 from "../assets/logo-portfolio/1-3-1.webp";
import imgLogo5 from "../assets/logo-portfolio/1-2-1.webp";
import imgLogo6 from "../assets/logo-portfolio/3-2-1.webp";
import imgLogo7 from "../assets/logo-portfolio/9-2-1.webp";
import imgLogo8 from "../assets/logo-portfolio/5-1-1.webp";
import imgLogo9 from "../assets/logo-portfolio/4-1-1.webp";
import imgLogo10 from "../assets/logo-portfolio/2-3.webp";
import imgLogo11 from "../assets/logo-portfolio/3-3.webp";
import imgLogo12 from "../assets/logo-portfolio/5-3.webp";
import imgLogo13 from "../assets/logo-portfolio/6-3.webp";
import imgLogo14 from "../assets/logo-portfolio/7-1-2.webp";
import imgLogo15 from "../assets/logo-portfolio/8-2.webp";
import imgLogo16 from "../assets/logo-portfolio/9-2.webp";
import imgLogo17 from "../assets/logo-portfolio/5-2.webp";
import imgLogo18 from "../assets/logo-portfolio/4-2.webp";
import imgLogo19 from "../assets/logo-portfolio/8-1.webp";
import imgLogo20 from "../assets/logo-portfolio/1-10.webp";
import imgLogo21 from "../assets/logo-portfolio/5.webp";
import imgLogo22 from "../assets/logo-portfolio/1.webp";
import imgLogo23 from "../assets/logo-portfolio/4.webp";
import imgLogo24 from "../assets/logo-portfolio/3.webp";
import imgLogo25 from "../assets/logo-portfolio/7-2.webp";
import imgLogo26 from "../assets/logo-portfolio/1600w-AZkCQwcZXQI-1-300x300.webp";
import imgLogo27 from "../assets/logo-portfolio/1600w-Q8DyI7OHXuc-1-300x300.webp";
import imgLogo28 from "../assets/logo-portfolio/1600w-fSD54RypYpE-1-300x300.webp";
import imgLogo29 from "../assets/logo-portfolio/1-1.webp";
import imgLogo30 from "../assets/logo-portfolio/1600w-yl2klyI5yvg-1.webp";
import imgLogo31 from "../assets/logo-portfolio/1600w-tlkbhvlSUdg-1.webp";
import imgLogo32 from "../assets/logo-portfolio/9-5.webp";
import imgLogo33 from "../assets/logo-portfolio/modern-hexagon-tech-logo-designs-concept-hexa-technology-logo-template-vector.webp";
import imgLogo34 from "../assets/logo-portfolio/1-1-2.webp";
import imgLogo35 from "../assets/logo-portfolio/2-1-1.webp";
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
    { id: 1, img: imgLogo1 },
    { id: 2, img: imgLogo2 },
    { id: 3, img: imgLogo3 },
    { id: 4, img: imgLogo4 },
    { id: 5, img: imgLogo5 },
    { id: 6, img: imgLogo6 },
    { id: 7, img: imgLogo7 },
    { id: 8, img: imgLogo8 },
    { id: 9, img: imgLogo9 },
    { id: 10, img: imgLogo10 },
    { id: 11, img: imgLogo11 },
    { id: 12, img: imgLogo12 },
    { id: 13, img: imgLogo13 },
    { id: 14, img: imgLogo14 },
    { id: 15, img: imgLogo15 },
    { id: 16, img: imgLogo16 },
    { id: 17, img: imgLogo17 },
    { id: 18, img: imgLogo18 },
    { id: 19, img: imgLogo19 },
    { id: 20, img: imgLogo20 },
    { id: 21, img: imgLogo21 },
    { id: 22, img: imgLogo22 },
    { id: 23, img: imgLogo23 },
    { id: 24, img: imgLogo24 },
    { id: 25, img: imgLogo25 },
    { id: 26, img: imgLogo26 },
    { id: 27, img: imgLogo27 },
    { id: 28, img: imgLogo28 },
    { id: 29, img: imgLogo29 },
    { id: 30, img: imgLogo30 },
    { id: 31, img: imgLogo31 },
    { id: 32, img: imgLogo32 },
    { id: 33, img: imgLogo33 },
    { id: 34, img: imgLogo34 },
    { id: 35, img: imgLogo35 },
  ],
};

const OurWork = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [selectedImg, setSelectedImg] = useState(null);
  const [showImgModal, setShowImgModal] = useState(false);
  const [modalImgIdx, setModalImgIdx] = useState(null);
  const [logoVisibleCount, setLogoVisibleCount] = useState(8);

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

  // Show all for web, but only a limited number for logo
  const imagesToShow =
    activeTab === "logo" ? WORKS.logo.slice(0, logoVisibleCount) : WORKS.web;

  const handleImgClick = (img) => {
    const idx = WORKS[activeTab].findIndex((w) => w.img === img);
    setModalImgIdx(idx);
    setSelectedImg(img);
    setShowImgModal(true);
  };

  const closeImgModal = () => {
    setShowImgModal(false);
    setSelectedImg(null);
    setModalImgIdx(null);
  };

  const handlePrevImg = (e) => {
    e.stopPropagation();
    setModalImgIdx((prev) => {
      const newIdx = prev === 0 ? WORKS[activeTab].length - 1 : prev - 1;
      setSelectedImg(WORKS[activeTab][newIdx].img);
      return newIdx;
    });
  };
  const handleNextImg = (e) => {
    e.stopPropagation();
    setModalImgIdx((prev) => {
      const newIdx = prev === WORKS[activeTab].length - 1 ? 0 : prev + 1;
      setSelectedImg(WORKS[activeTab][newIdx].img);
      return newIdx;
    });
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
              onClick={() => {
                setActiveTab(tab.key);
                if (tab.key === "logo") setLogoVisibleCount(8);
              }}
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
              <div
                className="ourwork-img-container"
                style={
                  activeTab === "logo"
                    ? {
                        height: 400,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }
                    : {}
                }
              >
                <img
                  src={work.img}
                  alt="Website Work"
                  className="ourwork-img"
                  onClick={() => handleImgClick(work.img)}
                  style={{
                    cursor: "pointer",
                    maxHeight: activeTab === "logo" ? 80 : undefined,
                    width: activeTab === "web" ? "100%" : "auto",
                    maxWidth: "100%",
                    height: activeTab === "web" ? "auto" : undefined,
                    objectFit: activeTab === "web" ? "contain" : undefined,
                    ...(activeTab === "web"
                      ? {
                          maxHeight: window.innerWidth <= 600 ? 180 : undefined,
                        }
                      : {}),
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Load More button for logo tab */}
        {activeTab === "logo" && logoVisibleCount < WORKS.logo.length && (
          <button
            className="ourwork-loadmore-btn"
            style={{
              margin: "24px auto 0 auto",
              display: "block",
              background: "#fff",
              color: "#101010",
              fontWeight: 700,
              fontSize: "1.1rem",
              borderRadius: 30,
              padding: "12px 28px",
              border: "none",
              boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
              cursor: "pointer",
            }}
            onClick={() => setLogoVisibleCount((prev) => prev + 8)}
          >
            Load More
          </button>
        )}
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
            style={{ maxWidth: 500, padding: 0, overflow: "hidden" }}
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
            <div
              className="modal-body"
              style={{ padding: 0, position: "relative" }}
            >
              <div
                className="modal-img-scroll"
                style={{
                  display: "flex",
                  overflowX: "auto",
                  scrollSnapType: "x mandatory",
                  width: "100%",
                  maxWidth: 500,
                }}
              >
                {WORKS[activeTab].map((work, idx) => (
                  <img
                    key={work.id}
                    src={work.img}
                    alt="Work"
                    style={{
                      width: "100%",
                      maxWidth: 500,
                      borderRadius: 12,
                      margin: "0 auto",
                      display: idx === modalImgIdx ? "block" : "none",
                      scrollSnapAlign: "center",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default OurWork;
