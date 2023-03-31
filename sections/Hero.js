import { createStyles, Text, Button } from "@mantine/core";
import { BrandGithub } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  content: {
    width: "100%",
    maxWidth: 1280,
    display: "flex",
    flexDirection: "column",
    paddingTop: "2rem",
    paddingBottom: "1rem",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: "calc(100vh - 4rem)",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    width: "100%",
    maxWidth: "calc(100vw - 32px)",
    gap: "0.5rem",
  },
  subtitle: {
    fontSize: "1.75rem",
    fontWeight: 500,
    marginBottom: -8,
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: 1.25,
    fontFamily: "VT323",
    color: theme.colors.brand,
  },
  titleCursor: {
    fontSize: 48,
    color: "transparent",
  },
  scrollIcon: {
    position: "absolute",
    bottom: 0,
    padding: "inherit",
  },
  controls: {
    marginTop: 8,
    display: "flex",
    gap: 8,
    [theme.fn.smallerThan("sm")]: {
      marginTop: 16,
    },
  },
}));

function Hero() {
  const { classes } = useStyles();

  return (
    <section id="hero" className={classes.content}>
      <div className={classes.main}>
        <Text className={classes.title} align="center">
          {"Hi, I'm Kailon."}
        </Text>
        <Text className={classes.subtitle} align="center">
          {"Full Stack Web Developer"}
        </Text>
        <div className={classes.controls}>
          <Button
            component="a"
            href="#projects"
            uppercase
            size="lg"
            color="brand"
          >
            My Projects
          </Button>
          <Button
            component="a"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/KailonSimon"
            uppercase
            size="lg"
            variant="outline"
            color="brand"
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
    </section>
  );
}

export default Hero;
