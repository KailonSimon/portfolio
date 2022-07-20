import Image from "next/image";
import { BrandGithub } from "tabler-icons-react";
import { createStyles, Button, Badge, Title, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  projectCard: {
    position: "relative",
    minWidth: "20rem",
    borderRadius: 8,
    backgroundImage:
      theme.colorScheme === "dark"
        ? "url('https://www.transparenttextures.com/patterns/rebel.png')"
        : null,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.white,
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.blue[1]
    }`,
  },
  projectCardTitle: {
    padding: "1rem",
    fontSize: "1rem",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    padding: "0 1rem",
    marginBottom: "0.5rem",
    justifyContent: "center",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "1rem",
  },
  badgeLeftSection: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function ProjectCard({ project }) {
  const { classes } = useStyles();
  const { name, description, demoURL, githubURL, tech_badges } = project;

  return (
    <div className={classes.projectCard}>
      <div className={classes.projectCardTitle}>
        <Title order={3} align="center" style={{ letterSpacing: 1 }}>
          {name}
        </Title>
        <Text my={8} weight={500}>
          {description}
        </Text>
      </div>
      <div>
        <div className={classes.tags}>
          {tech_badges.data.map((tag) => {
            const { name, image } = tag.attributes;
            return (
              <Badge
                key={tag.id}
                leftSection={
                  <Image
                    src={image.data.attributes.url}
                    alt={image.data.attributes.alternativeText}
                    height={15}
                    width={15}
                  />
                }
                size="lg"
                variant="filled"
                style={{ background: "gray" }}
                classNames={{
                  leftSection: classes.badgeLeftSection,
                }}
              >
                {name}
              </Badge>
            );
          })}
        </div>
      </div>

      <div className={classes.links}>
        <Button
          component="a"
          href={githubURL}
          target="_blank"
          variant="gradient"
          gradient={{ from: "purple", to: "orange", deg: 45 }}
          radius="lg"
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
          radius="lg"
        >
          Check it out
        </Button>
      </div>
    </div>
  );
}
