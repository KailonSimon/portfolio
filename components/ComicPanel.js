import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function ComicPanel({ title, variants, children }) {
  const constraintsRef = useRef(null);
  const childrenVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const comicTitle = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  useEffect(() => {
    console.log(children);
  }, [children]);
  return (
    <motion.li className="panel" variants={variants} ref={constraintsRef}>
      {title && (
        <motion.p className="comic-title top-left" variants={comicTitle}>
          {title}
        </motion.p>
      )}
      {children.map((child, i) => {
        return (
          <motion.div
            variants={childrenVariants}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              width: "fit-content",
              padding: "8px 8px 40px",
            }}
            drag
            dragConstraints={constraintsRef}
            key={i}
          >
            {child}
          </motion.div>
        );
      })}
      <motion.button
        className="bg-quaternary"
        style={{ position: "absolute", right: 16, bottom: 16 }}
        variants={childrenVariants}
      >
        Next
      </motion.button>
    </motion.li>
  );
}

export default ComicPanel;
