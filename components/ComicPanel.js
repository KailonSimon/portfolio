import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function ComicPanel({ title, nextPage, prevPage, pageNumber, children }) {
  const constraintsRef = useRef(null);

  const panel = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    exit: {
      opacity: 0,
      x: 200,
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

  const childrenVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  useEffect(() => {
    console.log(children);
  }, [children]);
  return (
    <motion.li
      className="panel"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      ref={constraintsRef}
    >
      {title && (
        <motion.p className="comic-title top-left" variants={comicTitle}>
          {title}
        </motion.p>
      )}
      {children.length > 0 &&
        children.map((child, i) => {
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
      {pageNumber < 2 && (
        <motion.button
          className="bg-quaternary"
          style={{ position: "absolute", right: 16, bottom: 16 }}
          onClick={nextPage}
        >
          Next
        </motion.button>
      )}
      {pageNumber > 1 && (
        <motion.button
          className="bg-quaternary"
          style={{ position: "absolute", left: 16, bottom: 16 }}
          onClick={prevPage}
        >
          Previous
        </motion.button>
      )}
    </motion.li>
  );
}

export default ComicPanel;
