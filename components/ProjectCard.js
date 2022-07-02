import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ProjectCard() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      className="project-card"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 1 }}
    >
      <div className="project-card-content"></div>
      <div className="project-card-title">
        <h2>Project Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="project-card-footer">
        <div className="project-tags">
          <div className="project-tag">React</div>
          <div className="project-tag">CSS</div>
          <div className="project-tag">Redux</div>
        </div>
      </div>
    </motion.div>
  );
}
