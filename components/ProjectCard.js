import { BrandGithub } from "tabler-icons-react";
import { createStyles, Button, Title, Text } from "@mantine/core";
import TechBadge from "./TechBadge";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  projectCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    width: "100%",
    borderRadius: 8,
    textAlign: "center",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.blue[1]
    }`,
    padding: "1rem",
  },
  projectCardTitle: {
    padding: "1rem",
    fontSize: "1rem",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    justifyContent: "center",
  },
  imageWrapper: {
    height: "200px",
    maxWidth: "100%",
    aspectRatio: "16/9",
    position: "relative",
    [theme.fn.largerThan("md")]: {
      margin: "1rem auto",
    },
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "1rem",
  },
}));

export default function ProjectCard({ project }) {
  const { classes } = useStyles();
  const { name, description, demoURL, githubURL, tech_badges } = project;

  return (
    <div className={classes.projectCard}>
      <div>
        <Title order={3} align="center" style={{ letterSpacing: 1 }}>
          {name}
        </Title>
        <div className={classes.tags}>
          {tech_badges.data.map((tag) => {
            const { name, image } = tag.attributes;
            return (
              <TechBadge
                name={name}
                image={image.data.attributes.url}
                imageAlt={image.data.attributes.alternativeText}
                key={tag.id}
              />
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={classes.imageWrapper}>
          <Image
            src={project.thumbnail.data.attributes.url}
            alt={project.thumbnail.data.attributes.alternativeText}
            layout="fill"
            style={{ borderRadius: 8 }}
          />
        </div>
        <Text my={8} weight={500}>
          {description}
        </Text>
      </div>

      <div className={classes.links}>
        <Button
          component="a"
          href={githubURL}
          target="_blank"
          variant="gradient"
          gradient={{ from: "purple", to: "orange", deg: 45 }}
          radius="xs"
        >
          <BrandGithub />
        </Button>
        <Button
          component="a"
          href={demoURL}
          target="_blank"
          variant="gradient"
          gradient={{ from: "purple", to: "orange", deg: 45 }}
          uppercase
          radius="xs"
        >
          Live Demo
        </Button>
      </div>
    </div>
  );
}
