import React from "react";
import { motion } from "framer-motion";

const AnimateLetters = ({ text }) => {
  const letters = Array.from(text);

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
        className="flex items-center justify-center mt-40 text-white -skew-y-12 "
      >
        {letters.map((letter, index) => {
          return (
            <motion.span
              variants={item}
              key={index}
              className="text-5xl text-inherit me text-center font-bold animate-[glow_1s_ease-in-out_infinite_alternate]"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          );
        })}
      </motion.div>
    </>
  );
};

export default AnimateLetters;
