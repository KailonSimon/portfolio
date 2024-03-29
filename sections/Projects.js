import { createStyles, Title, Text } from "@mantine/core";
import ProjectCard from "../components/ProjectCard";
import Carousel from "../components/Carousel";
import { useState } from "react";
import sortBy from "lodash/sortBy";

const useStyles = createStyles((theme) => ({
  content: {
    height: "fit-content",
    width: "100%",
    maxWidth: 1500,
    position: "relative",
    padding: "4em 0",
    [theme.fn.smallerThan("sm")]: {
      padding: "2em 0",
    },
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section id="projects" className={classes.content}>
      <Title order={2} component={Text} className={classes.title}>
        Projects
      </Title>
      {projects ? (
        <Carousel
          slides={sortBy(projects, [
            (project) => project.attributes.priority,
          ]).map((project, i) => (
            <ProjectCard
              project={project.attributes}
              key={project.id}
              selected={i === selectedIndex}
            />
          ))}
          selectedIndex={selectedIndex}
          setSelectedIndex={(index) => setSelectedIndex(index)}
        />
      ) : null}
    </section>
  );
}
