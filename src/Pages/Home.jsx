import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import OurWork from "../Components/OurWork";
import Bundle from "../Components/Bundle";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.3,
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <OurWork />
      <Bundle />
      <Footer />
    </motion.div>
  );
};

export default Home;
