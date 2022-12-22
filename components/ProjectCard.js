import { BrandGithub } from "tabler-icons-react";
import { createStyles, Button, Title, Text } from "@mantine/core";
import TechBadge from "./TechBadge";
import Image from "next/image";
import sortBy from "lodash/sortBy";

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
    padding: "1rem",
    border: "2px solid #000",
    filter: "drop-shadow(0.5rem 0.2rem 0.25rem #000)",
    marginBottom: 10,
    maxHeight: "calc(100vh - 6rem)",
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
    height: "18rem",
    maxWidth: "100%",
    aspectRatio: "16/9",
    position: "relative",

    ":hover": {
      filter: "none",
    },

    [theme.fn.largerThan("md")]: {
      margin: "1rem auto",
    },
    [theme.fn.smallerThan("sm")]: {
      height: "14rem",
      maxHeight: "40vw",
    },
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "1rem",
  },
}));

export default function ProjectCard({ project, selected }) {
  const { classes } = useStyles();
  const { name, description, demoURL, githubURL, tech_badges } = project;

  return (
    <div
      className={classes.projectCard}
      style={{ filter: selected ? "none" : "grayscale(100%) blur(2px)" }}
    >
      <div>
        <Title order={3} align="center" style={{ letterSpacing: 1 }}>
          {name}
        </Title>
        <div className={classes.tags}>
          {sortBy(tech_badges.data, [(tag) => tag.attributes.priority]).map(
            (tag) => {
              const { name, image } = tag.attributes;
              return (
                <TechBadge
                  name={name}
                  image={image.data.attributes.url}
                  imageAlt={image.data.attributes.alternativeText}
                  key={tag.id}
                />
              );
            }
          )}
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
            fill
            sizes="512px"
            style={{
              borderRadius: 4,
            }}
          />
        </div>
        <Text my={8} weight={500}>
          {description}
        </Text>
      </div>

      <div className={classes.links}>
        <Button
          component="a"
          href={demoURL}
          target="_blank"
          uppercase
          radius="xs"
          color="brand"
          size="lg"
          disabled={!selected}
        >
          Live Demo
        </Button>
        <Button
          component="a"
          href={githubURL}
          target="_blank"
          radius="xs"
          color="brand"
          variant="outline"
          size="lg"
          disabled={!selected}
          sx={(theme) => ({
            background: theme.colors.dark[7],
            ":hover": {
              background: theme.colors.dark[5],
            },
          })}
        >
          <BrandGithub />
        </Button>
      </div>
    </div>
  );
}
