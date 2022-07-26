import { useState, useEffect, useCallback } from "react";
import { createStyles, Title, Text } from "@mantine/core";
import ProjectCard from "../components/ProjectCard";
import useEmblaCarousel from "embla-carousel-react";

const useStyles = createStyles((theme) => ({
  content: {
    height: "fit-content",
    width: "100%",
    maxWidth: "100vw",
    marginTop: "2rem",
    position: "relative",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    textAlign: "center",
    position: "relative",
  },
  projectsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  carouselIndicators: {
    position: "relative",
    marginTop: 24,
  },
}));

export default function Projects({ projects }) {
  const { classes } = useStyles();
  const [emblaRef, embla] = useEmblaCarousel();
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
      <Title
        order={2}
        component={Text}
        className={classes.title}
        variant="gradient"
        gradient={{ from: "purple", to: "orange", deg: 45 }}
      >
        Projects
      </Title>
      {projects ? (
        <div className={classes.projectsContainer}>
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
        </div>
      ) : null}
    </section>
  );
}
