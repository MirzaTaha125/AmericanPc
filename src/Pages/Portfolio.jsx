import React from "react";
import OurWork from "../Components/OurWork";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import Testimonial from "../Components/Testimonial";
import imgTogether from "../assets/together.webp";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
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
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects" },
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years" },
  ];
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
  return (
    <>
      <Navbar />
      <OurWork />
      <div className=" togetherdiv">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <span className="together_we_create_span">
                Together we create a
              </span>{" "}
              <br />
              <span className="unique_digital_entity_span">
                Unique Digital Entity!
              </span>
              <br />
              <span className="contact_our_experts_span">
                Contact our experts NOW to begin crafting your project.
              </span>
              <div className="btndivtogether">
                <button
                  className="request_custom_quotebtn"
                  onClick={() => navigate("/contact")}
                >
                  Request a Custom Quote
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 text-center">
              <div className="div text-center together_img_div">
                <img src={imgTogether} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.section
        className="stats-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ourwork_overadecade text-center">
          Milestones That Matter.
        </h1>
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
      <Testimonial />
      <Footer />
    </>
  );
};

export default Portfolio;
