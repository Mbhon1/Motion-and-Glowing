import React from "react";
import { motion } from "framer-motion";

const AnimateText = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.09 * i },
    }),
  };

  const item = {
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex pl-10 mt-10 overflow-hidden"
      >
        {words.map((word, index) => {
          return (
            <motion.div
              variants={item}
              key={index}
              className="mr-5 text-5xl text-center"
            >
              {word}
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default AnimateText;
