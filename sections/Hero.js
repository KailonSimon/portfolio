import { createStyles, Text, Title, Button } from "@mantine/core";
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
  content: {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    maxWidth: 1280,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: "1.25rem",
    fontWeight: 500,
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
  },
}));

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-25vh" },
};

function Hero({ resumeURL }) {
  const { classes } = useStyles();
  return (
    <section id="hero" className={classes.content}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1.25 }}
      >
        <Text className={classes.subtitle}>{"Hi, my name is Kailon"}</Text>
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
          {" "}
          <Button
            component="a"
            href="#projects"
            variant="gradient"
            gradient={{ from: "purple", to: "orange", deg: 45 }}
            uppercase
            radius="xs"
            size="lg"
          >
            Projects
          </Button>
          <Button
            component="a"
            target="_blank"
            href={resumeURL}
            variant="outline"
            gradient={{ from: "purple", to: "orange", deg: 45 }}
            uppercase
            radius="xs"
            style={{
              color: "white",
              border: "5px solid",
              borderImage: "linear-gradient(45deg, #290099, #D92B00) 1",
              borderRadius: 99,
            }}
            size="lg"
          >
            Resume
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
