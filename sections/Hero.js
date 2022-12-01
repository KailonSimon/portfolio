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
    padding: "0 1rem",
    width: "40rem",
    maxWidth: "calc(100vw - 32px)",
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

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-25vh" },
};

function Hero({ resumeURL }) {
  const { classes } = useStyles();
  const { scrollYProgress } = useScroll();
  const componentHeight = measureHeight() - 64;
  const opacity = useTransform(scrollYProgress, (value) => 1 - value * 10);

  return (
    <section
      id="hero"
      className={classes.content}
      style={{ height: componentHeight > 0 ? componentHeight : "100vh" }}
    >
      <div className={classes.main}>
        <Text className={classes.subtitle}>{"Kailon Simon"}</Text>
        <Typewriter
          options={{
            strings: "Full Stack Web Developer.",
            autoStart: true,
            loop: false,
            pauseFor: 3600,
            skipAddStyles: true,
            wrapperClassName: classes.title,
            cursorClassName: classes.titleCursor,
          }}
        />
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

      <motion.div
        initial={{ opacity: 0, y: "-25px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        whileHover={{ translateY: "20px" }}
        style={{
          opacity,
        }}
        className={classes.scrollIcon}
      >
        <AnimatedMouse />
      </motion.div>
    </section>
  );
}

export default Hero;
