import Image from "next/image";
import { createStyles, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  aboutCard: {
    position: "relative",
    minWidth: "14rem",
    maxWidth: "25%",
    borderRadius: 8,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    border: "2px solid #000",
    filter: "drop-shadow(0.5rem 0.2rem 0.25rem #000)",
    flex: "1",
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
    overflow: "hidden",
    [theme.fn.smallerThan("sm")]: {
      minHeight: "min-content",
    },
  },
  title: {
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: 1.25,
    fontFamily: "VT323",
  },
  titleCursor: {
    color: "transparent",
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
            <Text className={classes.title} size="xl">
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
