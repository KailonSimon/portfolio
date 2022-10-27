import { useState, useEffect, useCallback, useRef } from "react";
import { createStyles, Title, Text } from "@mantine/core";
import ProjectCard from "../components/ProjectCard";
import useEmblaCarousel from "embla-carousel-react";

const useStyles = createStyles((theme) => ({
  content: {
    height: "fit-content",
    width: "100%",
    maxWidth: 1280,
    position: "relative",
    marginTop: "4rem",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    textAlign: "center",
    position: "relative",
    color: theme.colors.brand,
  },
  carouselIndicators: {
    position: "relative",
    marginTop: 24,
  },
}));

export default function Projects({ projects }) {
  const { classes } = useStyles();
  const [emblaRef, embla] = useEmblaCarousel({ loop: false });
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (!embla) return;
    onScroll();
    embla.on("scroll", onScroll);
  }, [embla, onScroll]);

  return (
    <section id="projects" className={classes.content}>
      <Title order={2} component={Text} className={classes.title}>
        Projects
      </Title>
      {projects ? (
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((project) => {
              return (
                <div className="embla__slide" key={project.id}>
                  <ProjectCard project={project.attributes} />
                </div>
              );
            })}
          </div>
          <div className="embla__progress">
            <div
              className="embla__progress__bar"
              style={{ transform: `translateX(${scrollProgress}%)` }}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
