import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ProjectCard({ project }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const { title, info, tags } = project;
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
      <div className="project-card-content">
        <img
          src={
            "https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2022/01/Green-Podcast-Minimalist-Blog-Banner--20--1.png"
          }
          style={{ objectFit: "cover", borderRadius: 4 }}
        />
      </div>
      <div className="project-card-title">
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
      <div className="project-card-footer">
        <div className="project-tags">
          {tags.map((tag) => {
            return (
              <div className="project-tag" key={tag}>
                <Image
                  src={`/icons/${tag}.svg`}
                  alt={tag}
                  height={15}
                  width={15}
                />
                {tag}
              </div>
            );
          })}
        </div>
      </div>

      <a className="link-button">Go to</a>
    </motion.div>
  );
}
