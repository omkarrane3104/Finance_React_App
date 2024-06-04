import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  const mobile = window.innerWidth <= 768;

  const imgVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  const textVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  return (
    <>
      <section className="hero">
        <Navbar />
        <img className="star-8" src="/images/Star 8.png" alt="" />

        <div className="hero-details">
          <motion.div
            className="h-text"
            initial={mobile ? {} : "hidden"}
            animate={mobile ? {} : "visible"}
            variants={textVariants}
          >
            <img className="blur-img-1" src="/images/blur_red_orange.png" alt="" />
            <h1>Make The Best Financial Decisions</h1>
            <p>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
            <div className="h-buttons">
              <button className="h-btn-1">
                Get Started <img src="/images/get_started_vector.png" alt="" />
              </button>
              <div className="watch">
                <a href=""><img src="/images/play.png" alt="" /></a>
                <span>Watch More</span>
              </div>
            </div>
            <img className="h-star-8" src="/images/Star 8.png" alt="" />
            <img src="/images/achivment_img.png" alt="" />
          </motion.div>
          
          <motion.div
            className="h-img"
            initial={mobile ? {} : "hidden"}
            animate={mobile ? {} : "visible"}
            variants={imgVariants}
          >
            <img
              className="h-img-1"
              src="https://alderfinance.com/assets/images/main-header-img.png"
              alt=""
            />
            <img className="h-img-2" src="/images/rings.png" alt="" />
            <img className="blur-img-2" src="/images/blur_red.png" alt="" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
