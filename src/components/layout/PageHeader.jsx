import React from 'react';
import { motion } from 'framer-motion';

const Wave = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-20">
      <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <motion.path
          d="M1440,84 C1000,150 600,20 0,84 L0,120 L1440,120 Z"
          fill="hsl(var(--background))"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.path
          fill="hsl(var(--background))"
          animate={{
            d: [
              "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z",
              "M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z",
              "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ opacity: 0.1 }}
        />
        <motion.path
          fill="hsl(var(--background))"
          animate={{
            d: [
              "M0,80 C200,40 500,120 720,80 C940,40 1240,120 1440,80 L1440,120 L0,120 Z",
              "M0,80 C200,120 500,40 720,80 C940,120 1240,40 1440,80 L1440,120 L0,120 Z",
              "M0,80 C200,40 500,120 720,80 C940,40 1240,120 1440,80 L1440,120 L0,120 Z"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ opacity: 0.2 }}
        />
      </svg>
    </div>
  );
};


const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="relative bg-gradient-to-r from-toklu-blue to-toklu-blue-dark text-white overflow-hidden pb-12">
      <div className="container mx-auto px-4 py-20 sm:py-28 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-4xl md:text-5xl font-bold font-heading text-white drop-shadow-lg"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="mt-4 text-xl max-w-3xl mx-auto text-primary-foreground/90 drop-shadow-md"
        >
          {subtitle}
        </motion.p>
      </div>
      <Wave />
    </div>
  );
};

export default PageHeader;