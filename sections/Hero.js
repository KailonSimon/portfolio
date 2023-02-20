import { createStyles, Text, Button } from "@mantine/core";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrandGithub } from "tabler-icons-react";
import AnimatedMouse from "../components/AnimatedMouse";
import { measureHeight } from "react-div-100vh";
import Typewriter from "typewriter-effect";

const useStyles = createStyles((theme) => ({
  content: {
    width: "100%",
    maxWidth: 1280,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingBottom: "1rem",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem",
    width: "48rem",
    maxWidth: "calc(100vw - 32px)",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    borderRadius: 8,
    border: "2px solid #000",
    filter: "drop-shadow(0.5rem 0.2rem 0.25rem #000)",
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

function Hero({ resumeURL }) {
  const { classes } = useStyles();

  return (
    <section id="hero" className={classes.content} style={{ height: "100vh" }}>
      <div className={classes.main}>
        <Text className={classes.subtitle}>{"Kailon Simon"}</Text>
        <Text className={classes.title}>{"Full Stack Web Developer."}</Text>
        <div className={classes.controls}>
          <Button
            component="a"
            target="_blank"
            rel="noreferrer"
            href={resumeURL}
            uppercase
            size="lg"
            color="brand"
          >
            Resume
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
