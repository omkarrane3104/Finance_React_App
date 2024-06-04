import React, { useState } from 'react';
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCancelCircle } from "react-icons/im";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobile = window.innerWidth <= 768;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  return (
    <nav className="hero">
      <motion.ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <motion.img 
          src="./images/logo.png" 
          alt="Uifry Logo"
          initial="hidden"
          animate="visible"
          variants={mobile ? {} : itemVariants}
          custom={0}
        />
        {['Home', 'About Us', 'Pricing', 'Features'].map((item, index) => (
          <motion.li
            key={index}
            custom={index + 1}
            initial="hidden"
            animate="visible"
            variants={mobile ? {} : itemVariants}
          >
            <a href="#">{item}</a>
          </motion.li>
        ))}
      </motion.ul>
      <motion.button 
        className="download-btn"
        initial="hidden"
        animate="visible"
        variants={mobile ? {} : itemVariants}
        custom={5}
      >
        Download
      </motion.button>
      <img className="star-1" src="./images/Star 1.png" alt="" />
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <ImCancelCircle /> : <RxHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
