import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import emailjs from "@emailjs/browser";
import img1 from "../assets/Custom_design.webp";
import img2 from "../assets/mutiple_design.webp";
import img3 from "../assets/scale.webp";
import img4 from "../assets/vector.webp";
import img5 from "../assets/colorpallet.webp";

const carouselSlides = [
  {
    img: img1,
    title: "Custom Concepts",
    text: "Every logo starts with a fresh idea—no templates, just original designs made to reflect your unique brand identity.",
  },
  {
    img: img2,
    title: "Multiple Design Options",
    text: "You'll receive a variety of logo concepts to choose from, giving you flexibility and creative direction.",
  },
  {
    img: img3,
    title: "Scalability",
    text: "Your logo will be delivered in high-quality vector formats like SVG and AI, ensuring it stays sharp at any size.",
  },
  {
    img: img4,
    title: "Vector-Based Design",
    text: "Your logo is crafted in scalable vector formats like SVG and AI, ensuring it remains crisp and high-quality at any size from tiny favicons to giant billboards.",
  },
  {
    img: img5,
    title: "Color Psychology",
    text: "Your logo colors are selected based on emotion and strategy, helping to communicate the right message to your audience.",
  },
];

const timelineSteps = [
  "Discovery & Research",
  "Concept Sketching",
  "Digital Drafts",
  "Feedback & Revisions",
  "Final Delivery",
];

const timelineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  }),
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

const Logo_Services = () => {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
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

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % carouselSlides.length);
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Helper to get slide position (prev, current, next, or hidden)
  const getSlidePosition = (idx) => {
    if (idx === current) return "active";
    if (idx === (current - 1 + carouselSlides.length) % carouselSlides.length)
      return "prev";
    if (idx === (current + 1) % carouselSlides.length) return "next";
    return "hidden";
  };
  return (
    <>
      <Navbar />
      <section className="webdev-services-section">
        <div className="webdev-services-container">
          <h1 className="webdev-services-title">Logo Service</h1>
          <p className="webdev-services-text">
            From idea to deployment. Scalable, fast, and beautifully designed
            websites tailored to your brand.
          </p>
          <button className="service_btn" onClick={handleOrderNow}>
            Lets Build You a Logo
          </button>
        </div>
      </section>
      <motion.section
        className="webdev-carousel-section"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <div
          className="webdev-carousel-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {carouselSlides.map((slide, idx) => {
            const pos = getSlidePosition(idx);
            return (
              <div
                key={idx}
                className={`webdev-carousel-slide webdev-carousel-slide-${pos}`}
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="webdev-carousel-overlay">
                  <h2 className="text-center">{slide.title}</h2>
                  <p className="text-center">{slide.text}</p>
                </div>
                {pos === "active" && (
                  <>
                    <button
                      className="webdev-carousel-arrow left"
                      onClick={prevSlide}
                    >
                      &#8592;
                    </button>
                    <button
                      className="webdev-carousel-arrow right"
                      onClick={nextSlide}
                    >
                      &#8594;
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        className="dev-process-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <h2 className="dev-process-title">Development Process</h2>
        <div className="dev-timeline">
          {timelineSteps.map((step, i) => (
            <motion.div
              className="dev-timeline-step"
              key={step}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={timelineVariants}
            >
              <div className="dev-timeline-dot" />
              <span className="dev-timeline-label">{step}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section>
        <section className="why_choose_us">
          <div className="why-choose-container">
            <h2 className="why-choose-title">Why Choose Us for Logo Design?</h2>
            <p className="why-choose-text">
              Our logo design process is rooted in creativity, research, and a
              deep understanding of your brand. We deliver logos that are not
              only visually striking but also meaningful and memorable. Our
              designers work closely with you to ensure your logo truly
              represents your business identity.
            </p>
            <ul className="why-choose-list">
              <li>Unique, custom logo concepts</li>
              <li>Experienced, creative designers</li>
              <li>Unlimited revisions for satisfaction</li>
              <li>Fast turnaround & multiple formats</li>
              <li>Brand-focused, timeless results</li>
            </ul>
          </div>
        </section>
      </motion.section>

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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Get Started with Logo Design
            </motion.h1>
            <motion.p
              className="form_subheading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Fill the form to get started with your logo design project
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

      {showThankYou && (
        <motion.div
          className="order-modal-overlay"
          onClick={handleThankYouClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="order-modal-content"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <button className="order-modal-close" onClick={handleThankYouClose}>
              ×
            </button>
            <div className="thank-you-content">
              <h2>Thank You!</h2>
              <p>
                Your message has been sent successfully. We'll get back to you
                soon!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  );
};

export default Logo_Services;
