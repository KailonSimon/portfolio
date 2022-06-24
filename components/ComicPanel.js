import React from "react";
import { motion } from "framer-motion";

function ComicPanel({ title, variants, children }) {
  const bubble = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: "0deg",
      transition: {
        when: "beforeChildren",
        staggerChildren: 2,
        duration: 1,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -200,
      y: 50,
      rotate: "-12deg",
      transition: {
        when: "afterChildren",
      },
    },
  };
  return (
    <motion.li className="panel" variants={variants}>
      {title && <p className="comic-text top-left">{title}</p>}
      <motion.div
        variants={bubble}
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        {children}
      </motion.div>
    </motion.li>
  );
}

export default ComicPanel;
