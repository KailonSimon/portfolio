import Image from "next/image";
import { createStyles, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  aboutCard: {
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
  aboutCardTitle: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    fontWeight: 700,
    width: "100%",
    textAlign: "center",
    fontSize: "1.5rem",
    padding: "0.5rem 2rem",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.white,
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.blue[3],
    letterSpacing: 2,
  },

  aboutCardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1.25rem",
    padding: "1rem",
    gap: "1rem",
    minHeight: 320,
  },
}));

function AboutCard({ title, skills }) {
  const { classes } = useStyles();

  return (
    <div className={classes.aboutCard}>
      <Title order={3} className={classes.aboutCardTitle}>
        {title}
      </Title>
      <div className={classes.aboutCardContent}>
        {skills.map((skill) => (
          <div
            key={skill.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text size="md" weight={500}>
              {skill.attributes.name}
            </Text>
            <Image
              src={skill.attributes.image.data.attributes.url}
              alt={skill.attributes.image.data.attributes.alternativeText}
              height={25}
              width={25}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutCard;
