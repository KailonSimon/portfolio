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
    position: "relative",
    padding: "4em 0",
    [theme.fn.smallerThan("sm")]: {
      padding: "2em 0",
    },
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    color: theme.colors.brand,
    marginBottom: "0.5rem",
    textAlign: "center",
    position: "relative",
    letterSpacing: 1.25,
  },
  subtitle: {
    fontSize: "2rem",
    fontWeight: 700,
    color: theme.colors.brand,
    marginBottom: "0.5rem",
    textAlign: "center",
    position: "relative",
    letterSpacing: 1.25,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "1.25rem",
    fontWeight: 500,
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
      <Title order={2} component={Text} className={classes.title}>
        About Me
      </Title>
      <div className={classes.textContainer}>
        <Text className={classes.text} align="center">
          {
            "I am a full stack web developer with a passion for crafting innovative and efficient digital solutions. With expertise in both front-end and back-end development, I have a comprehensive understanding of the entire web development process, from ideation to deployment."
          }
        </Text>
        <Text className={classes.text} align="center">
          {
            "My experience includes designing and building responsive websites and applications using the latest technologies such as HTML, CSS, TypeScript, React, Node.js, and SQL. I have also worked with various CMS platforms and e-commerce systems."
          }
        </Text>
        <Text className={classes.text} align="center">
          {
            "My commitment to delivering high-quality work is evident in every project I undertake. I pride myself on being a problem solver and a quick learner, always striving to stay up-to-date with the latest trends and advancements in the industry."
          }
        </Text>
      </div>
      <Title order={3} component={Text} className={classes.subtitle}>
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
