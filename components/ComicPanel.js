import React from "react";
import { motion } from "framer-motion";

function ComicPanel({ title, variants, children }) {
  const bubble = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: "0deg",
      transition: {
        when: "beforeChildren",
        staggerChildren: 2,
        duration: 0.75,
        delay: 1.75,
      },
    },
    hidden: {
      opacity: 0,
      x: -200,
      y: 50,
      scale: 0.01,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const comicTitle = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.25,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <motion.li className="panel" variants={variants}>
      {title && (
        <motion.p className="comic-title top-left" variants={comicTitle}>
          {title}
        </motion.p>
      )}
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
