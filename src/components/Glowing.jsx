import React from "react";
import { motion } from "framer-motion";

const Glowing = ({ text }) => {
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
        className="overflow-hidden flex mt-10 pl-10"
      >
        {words.map((word, index) => {
          return (
            <motion.div
              variants={item}
              key={index}
              className="text-5xl mr-5 text-center"
            >
              {word}
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Glowing;
