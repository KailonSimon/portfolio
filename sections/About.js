import React from "react";
import AboutCard from "../components/AboutCard";
import { createStyles, Title, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  content: {
    minHeight: "100vh",
    height: "fit-content",
    width: "100%",
    maxWidth: "100vw",
    padding: "3rem",
    marginTop: "2rem",
    position: "relative",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    color: theme.colorScheme === "dark" ? theme.colors.blue[3] : theme.white,
    marginBottom: "1rem",
    textAlign: "center",
    position: "relative",
  },
  aboutCardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2rem",
  },
}));

const languages = ["JavaScript", "TypeScript", "CSS", "HTML", "Java", "Kotlin"];
const technologies = ["React", "Next.js", "Redux", "Android", "Node", "Git"];
const other = ["Tailwind", "Bootstrap", "Blender", "Firebase"];

function About() {
  const { classes } = useStyles();
  return (
    <section id="about" className={classes.content}>
      <Title
        order={2}
        component={Text}
        className={classes.title}
        variant="gradient"
        gradient={{ from: "purple", to: "orange", deg: 45 }}
      >
        Skills
      </Title>
      <div className={classes.aboutCardContainer}>
        <AboutCard title="Languages" skills={languages} />
        <AboutCard title="Technologies" skills={technologies} />
        <AboutCard title="Other" skills={other} />
      </div>
    </section>
  );
}

export default About;
