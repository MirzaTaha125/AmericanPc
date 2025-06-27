import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ThankYouModal from "./ThankYouModal";

const Hero = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "Crafting Stunning Websites That Elevate Your Brand";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

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
        (result) => {
          formRef.current.reset();
          setIsSending(false);
          setShowFormModal(false);
          setShowThankYou(true);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          formRef.current.reset();
          setIsSending(false);
        }
      );
  };

  const handleGetQuote = () => {
    setShowFormModal(true);
  };

  const handleFormClose = () => {
    setShowFormModal(false);
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        className="eagle-background"
        style={{
          backgroundImage: `url('/eagleback.webp')`,
        }}
      ></div>
      <div className="main_div container" style={{ position: "relative" }}>
        <svg
          className="hero-svg-blob-bg"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#7a7a7a"
            d="M49.2,-56.3C64.6,-45.7,78.6,-31,81.9,-14.2C85.1,2.6,77.7,21.6,66.7,36.6C55.8,51.6,41.3,62.7,25.3,67.9C9.3,73,-8.4,72.2,-25.2,67C-42,61.8,-57.9,52.2,-66.5,38.1C-75,23.9,-76,5.2,-73.3,-13.4C-70.5,-31.9,-64,-50.2,-51.1,-61.3C-38.3,-72.4,-19.2,-76.4,-1.1,-75C16.9,-73.7,33.7,-67,49.2,-56.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <div
          className="container"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <div className="row">
            <div className="col-lg-6 col-md-12 heading_div fade-in-up">
              <div className="typing-container">
                <h1 className="main_heading typing-cursor">
                  {displayText}
                  <span className="cursor">|</span>
                </h1>
              </div>
              <p className="main_sub_heading fade-in-up">
                Innovative designs, seamless user experiences, and custom
                solutions tailored to grow your business online.
              </p>
              <div className="btns_div fade-in-up">
                <div className="btn btn_1" onClick={handleGetQuote}>
                  Get Quote
                </div>
                <div className="btn btn_2"> View Packages </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 div_form_main text-center">
              <motion.div
                className="form_div"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.0,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              >
                <div className="text_form_div text-center">
                  <h1 className="form_heading blink-animation">
                    Get 75% Off Now
                  </h1>
                  <p className="form_subheading">Limited Time Offer</p>

                  <form ref={formRef} onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Name"
                      name="user_name"
                      required
                    />
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

                    <button type="submit" disabled={isSending}>
                      {isSending ? "Sending..." : "Claim Free Consultation"}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Order Form Modal */}
      {showFormModal && (
        <div className="order-modal-overlay" onClick={handleFormClose}>
          <div
            className="order-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="order-modal-close" onClick={handleFormClose}>
              ×
            </button>
            <h1 className="form_heading">Get a Quote</h1>
            <p className="form_subheading">Fill the form to get started</p>
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
              <button type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Get Quote"}
              </button>
            </form>
          </div>
        </div>
      )}
      <ThankYouModal isOpen={showThankYou} onClose={handleThankYouClose} />
    </div>
  );
};

export default Hero;
