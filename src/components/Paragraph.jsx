import React from "react";
import { motion } from "framer-motion";

const Paragraph = ({ myParagraph }) => {
  const paragraphs = Array.from(myParagraph);

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
        className="flex items-center justify-center mt-10 -skew-y-12 hover:animate-bounce"
      >
        {paragraphs.map((paragraph, index) => {
          return (
            <motion.span
              variants={item}
              key={index}
              className="text-5xl text-inherit me text-center font-bold animate-[glow_1s_ease-in-out_infinite_alternate]"
            >
              {paragraph === " " ? "\u00A0" : paragraph}
            </motion.span>
          );
        })}
      </motion.div>
    </>
  );
};

export default Paragraph;
