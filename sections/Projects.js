import { createStyles, Title, Text } from "@mantine/core";
import React from "react";
import ProjectCard from "../components/ProjectCard";

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
    marginBottom: "1rem",
    textAlign: "center",
    position: "relative",
  },
  projectsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2rem",
  },
}));

const projects = [
  {
    title: "Trivia Quiz Game",
    info: "A full stack trivia game using the Open Trivia Database API",
    tags: ["TypeScript", "React", "Next.js", "Prisma", "Redux"],
    repo: "https://github.com/KailonSimon/trivia-q",
    url: "https://trivia-q.vercel.app/",
  },
];

export default function Projects() {
  const { classes } = useStyles();
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
      <div className={classes.projectsContainer}>
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </div>
    </section>
  );
}
