import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 1.05,
    filter: "blur(10px)"
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  exit: {
    opacity: 0,
    y: 15,
    scale: 1.05,
    filter: "blur(10px)",
    transition: { 
      duration: 0.4, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const PageTransition = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
