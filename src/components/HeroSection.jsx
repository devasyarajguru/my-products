// src/components/HeroSection.jsx
import React from 'react';
import '../styles/HeroSection.css'; // Import the CSS file for styles
import SignUpEng from "../assets/signup-eng.png"
import SpreadSheetImg from "../assets/spreadsheet.png"
import { motion } from 'framer-motion';



const HeroSection = () => {

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 } 
  }
};

const imageVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 1, ease: "easeOut" } 
  },
  hover: { scale: 1.05 }
};


  return (
    <motion.div 
      className="hero-container"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      {/* Hero Image 1 */}
      <motion.div variants={imageVariants} whileHover="hover" className="hero-image-wrapper">
        <motion.img 
          className="hero-image"
          src={SignUpEng}
          alt="Hero Image 1"
        />
      </motion.div>

      {/* Hero Image 2 */}
      <motion.div variants={imageVariants} whileHover="hover" className="hero-image-wrapper">
        <motion.img 
          className="hero-image"
          src={SpreadSheetImg}
          alt="Hero Image 2"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;