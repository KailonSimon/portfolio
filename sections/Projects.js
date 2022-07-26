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
  const [emblaRef] = useEmblaCarousel();
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
          </div>
        </div>
      ) : null}
    </section>
  );
}
