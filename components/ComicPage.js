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

  const bubble = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        delay: 1.75,
      },
    },
    hidden: { opacity: 0, x: 0, y: 0, scale: 0.5 },
  };

  return (
    <motion.ul
      className="comic"
      initial="hidden"
      animate="visible"
      variants={page}
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ComicPanel title="About Me" variants={panel}>
        <SpeechBubble text="Hi, I'm Kailon!" variants={bubble} />
        <SpeechBubble
          text="I am a Full Stack Web Developer."
          variants={bubble}
        />
        <SpeechBubble
          text="I also have experience developing Mobile Applications"
          variants={bubble}
        />
      </ComicPanel>
    </motion.ul>
  );
}

export default ComicPage;
