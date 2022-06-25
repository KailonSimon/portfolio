import React, { useEffect, useState } from "react";
import ComicPanel from "./ComicPanel";
import SpeechBubble from "./SpeechBubble";
import { motion, AnimatePresence } from "framer-motion";

function ComicPage() {
  const [pageNumber, setPageNumber] = useState(1);

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

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

  useEffect(() => {
    console.log(pageNumber);
  }, [pageNumber]);

  return (
    <motion.ul
      className="comic"
      initial="hidden"
      animate="visible"
      variants={page}
    >
      <AnimatePresence>
        {pageNumber === 1 && (
          <ComicPanel
            title="About Me"
            nextPage={nextPage}
            pageNumber={pageNumber}
          >
            <SpeechBubble text="Hi, I'm Kailon!" variants={bubble} />
            <SpeechBubble
              text="I am a Full Stack Web Developer."
              variants={bubble}
            />
            <SpeechBubble
              text="I also have experience developing Android Mobile Applications."
              variants={bubble}
            />
          </ComicPanel>
        )}
        {pageNumber === 2 && (
          <ComicPanel
            title="My Skills"
            nextPage={nextPage}
            prevPage={prevPage}
            pageNumber={pageNumber}
          >
            <SpeechBubble
              text="I am experienced in JavaScript, CSS/HTML, React, and NextJS."
              variants={bubble}
            />
            <SpeechBubble
              text="I also use Java and Kotlin."
              variants={bubble}
            />
          </ComicPanel>
        )}
      </AnimatePresence>
    </motion.ul>
  );
}

export default ComicPage;
