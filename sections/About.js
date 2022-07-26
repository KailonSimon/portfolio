import AboutCard from "../components/AboutCard";
import { createStyles, Title, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "fit-content",
    width: "100%",
    maxWidth: 1280,
    marginTop: "2rem",
    position: "relative",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    color: theme.colorScheme === "dark" ? theme.colors.blue[3] : theme.white,
    marginBottom: "0.5rem",
    textAlign: "center",
    position: "relative",
  },
  aboutCardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
    width: "100%",
    maxWidth: "75rem",
  },
}));

function About({ languages, technologies, other }) {
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
