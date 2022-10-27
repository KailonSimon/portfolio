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
    padding: "0 1rem",
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
            sx={(theme) => ({
              color: theme.colors.brand,
              fontSize: "inherit",
              fontFamily: "inherit",
            })}
          >
            Web
          </Text>{" "}
          Developer
        </Title>
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
