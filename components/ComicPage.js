import React, { useState } from "react";
import ComicPanel from "./ComicPanel";
import SpeechBubble from "./SpeechBubble";
import { motion } from "framer-motion";

function ComicPage({ title }) {
  const page = {
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
  };
  const panel = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.ul
      className="comic"
      initial="hidden"
      animate="visible"
      variants={page}
    >
      <ComicPanel title="About Me..." variants={panel}>
        <SpeechBubble text="Hi, I'm Kailon!" />
      </ComicPanel>
    </motion.ul>
  );
}

export default ComicPage;
