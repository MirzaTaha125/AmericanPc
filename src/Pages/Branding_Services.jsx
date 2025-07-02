import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import emailjs from "@emailjs/browser";
import img1 from "../assets/rebranding.webp";
import img2 from "../assets/social_media_branding.webp";
import img3 from "../assets/brand.webp";
import img4 from "../assets/social_media_post.webp";
import img5 from "../assets/visual_content.webp";

const carouselSlides = [
  {
    img: img1,
    title: "Rebranding Services",
    text: "Transform and refresh your existing brand identity while preserving its core values and audience connection.",
  },
  {
    img: img2,
    title: "Social Media Branding",
    text: "Branded templates and assets for Instagram, LinkedIn, Facebook, and more — optimized for consistency and engagement.",
  },
  {
    img: img3,
    title: "Brand Strategy",
    text: "We help define your brand's voice, values, positioning, and personality — the foundation of every successful identity.",
  },
  {
    img: img4,
    title: "Branded Social Media Posts",
    text: "Custom-designed post templates and content ideas that align with your visual identity and tone of voice, perfect for Instagram, LinkedIn, and more.",
  },
  {
    img: img5,
    title: "Branded Visual Content",
    text: "From quote cards to promotional banners, we craft on-brand graphics that keep your social feed cohesive and professional.",
  },
];

const timelineSteps = [
  "Discovery & Planning",
  "Brand Strategy",
  "Moodboard & Direction",
  "Logo Design Concepts",
  "Visual Identity System",
  "Final Files & Handover",
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

const Branding_Services = () => {
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
          <h1 className="webdev-services-title">Branding Services</h1>
          <p className="webdev-services-text">
            Build a powerful, consistent, and unforgettable brand identity from
            the ground up.
          </p>
          <button className="service_btn" onClick={handleOrderNow}>
            Lets Scale Your Business
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
            <h2 className="why-choose-title">Why Choose Us for Branding?</h2>
            <p className="why-choose-text">
              We help you build a brand that tells your story and connects with
              your audience. Our branding solutions are comprehensive,
              strategic, and tailored to your business goals. From visual
              identity to messaging, we ensure your brand stands out and
              endures.
            </p>
            <ul className="why-choose-list">
              <li>Strategic, holistic branding approach</li>
              <li>Consistent visual & verbal identity</li>
              <li>Creative, experienced brand experts</li>
              <li>Brand guidelines & launch support</li>
              <li>Long-term brand value creation</li>
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
              Get Started with Branding
            </motion.h1>
            <motion.p
              className="form_subheading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Fill the form to get started with your branding project
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

export default Branding_Services;
