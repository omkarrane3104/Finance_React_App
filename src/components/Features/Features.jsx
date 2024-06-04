import React from 'react';
import './Features.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <section className="features" ref={ref}>
      <img className="star-8-2" src="./images/Star 8.png" alt="" />
      <motion.div
        className="container"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <img className="f-img-1" src="./images/group_feature.png" alt="" />
        <img className="blur-img-3" src="./images/feature_blur_1.png" alt="" />
      </motion.div>
      <img className="blur-img-4" src="./images/feature_blur_2.png" alt="" />
    </section>
  );
};

export default Features;
