import Image from "next/image";
import { createStyles, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  aboutCard: {
    position: "relative",
    minWidth: "20rem",
    borderRadius: 8,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.blue[1]
    }`,
    [theme.fn.smallerThan("md")]: {
      minWidth: "15rem",
    },
  },
  aboutCardTitle: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    fontWeight: 700,
    width: "100%",
    textAlign: "center",
    padding: "0.5rem",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.white,
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.blue[3],
    letterSpacing: 2,
  },

  aboutCardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1rem",
    padding: "1rem 0.5rem",
    gap: ".75rem",
    minHeight: "18rem",
    [theme.fn.smallerThan("sm")]: {
      minHeight: "min-content",
    },
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
            <Text weight={500}>{skill.attributes.name}</Text>
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
