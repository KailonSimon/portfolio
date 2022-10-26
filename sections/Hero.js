import { createStyles, Text, Title, Button, Loader } from "@mantine/core";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrandGithub } from "tabler-icons-react";
import AnimatedMouse from "../components/AnimatedMouse";
import { measureHeight } from "react-div-100vh";

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
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: 500,
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
  },
  scrollIcon: {
    position: "absolute",
    bottom: 0,
    padding: "inherit",
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
      style={{ height: componentHeight }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1.25 }}
        className={classes.main}
      >
        <Text className={classes.subtitle}>{"Kailon Simon"}</Text>
        <Title order={1} className={classes.title}>
          Full Stack{" "}
          <Text
            component="span"
            variant="gradient"
            style={{ fontSize: "inherit", fontFamily: "inherit" }}
            gradient={{ from: "purple", to: "orange", deg: 45 }}
          >
            Web
          </Text>{" "}
          Developer
        </Title>
        <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
          <Button
            component="a"
            target="_blank"
            rel="noreferrer"
            href={resumeURL}
            variant="gradient"
            gradient={{ from: "purple", to: "orange", deg: 45 }}
            uppercase
            radius="xs"
            size="lg"
          >
            Resume
          </Button>
          <Button
            component="a"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/KailonSimon"
            variant="gradient"
            gradient={{ from: "purple", to: "orange", deg: 45 }}
            uppercase
            radius="xs"
            size="lg"
          >
            <BrandGithub />
          </Button>
        </div>
      </motion.div>

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
