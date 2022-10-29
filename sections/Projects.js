import { createStyles, Title, Text } from "@mantine/core";
import ProjectCard from "../components/ProjectCard";
import Carousel from "../components/Carousel";

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
    letterSpacing: 1.25,
  },
  carouselIndicators: {
    position: "relative",
    marginTop: 24,
  },
}));

export default function Projects({ projects }) {
  const { classes } = useStyles();

  return (
    <section id="projects" className={classes.content}>
      <Title order={2} component={Text} className={classes.title}>
        Projects
      </Title>
      {projects ? (
        <Carousel
          slides={projects.map((project) => (
            <ProjectCard project={project.attributes} key={project.id} />
          ))}
        />
      ) : null}
    </section>
  );
}
