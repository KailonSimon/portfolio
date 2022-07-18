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
  const { title, info, tags, repo, url } = project;

  return (
    <div className={classes.projectCard}>
      <div className={classes.projectCardTitle}>
        <Title order={3} align="center" style={{ letterSpacing: 1 }}>
          {title}
        </Title>
        <Text my={8} weight={500}>
          {info}
        </Text>
      </div>
      <div>
        <div className={classes.tags}>
          {tags.map((tag) => {
            return (
              <Badge
                key={tag}
                leftSection={
                  <Image
                    src={`/icons/${tag.toLowerCase()}.svg`}
                    alt={tag}
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
                {tag}
              </Badge>
            );
          })}
        </div>
      </div>

      <div className={classes.links}>
        <Button
          component="a"
          href={repo}
          target="_blank"
          variant="gradient"
          gradient={{ from: "purple", to: "orange", deg: 45 }}
          radius="lg"
        >
          <BrandGithub />
        </Button>
        <Button
          component="a"
          href={url}
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
