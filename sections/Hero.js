import { createStyles, Text, Button } from "@mantine/core";
import { BrandGithub } from "tabler-icons-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
    },
    gap: "32px",
    alignItems: "center",
  },
  avatarContainer: {
    height: 256,
    width: 256,
    background: "#000",
    borderRadius: "999px",
    filter: "drop-shadow(0px 0.2rem 0.2rem #000)",
    border: "2px solid #1c1b18",
    overflow: "hidden",
  },
  avatar: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: 1.25,
    fontFamily: "VT323",
    color: theme.colors.brand,
    textAlign: "center",
    [theme.fn.largerThan("sm")]: {
      textAlign: "left",
    },
  },
  subtitle: {
    fontSize: "1.75rem",
    fontWeight: 500,
    marginBottom: -8,
    textAlign: "center",
    [theme.fn.largerThan("sm")]: {
      textAlign: "left",
    },
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
      justifyContent: "center",
    },
  },
}));

function Hero() {
  const { classes } = useStyles();

  return (
    <section id="hero" className={classes.content}>
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes.avatarContainer}>
            <motion.div
              className={classes.avatar}
              initial={{ y: -256 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <Image
                src="/avatar.svg"
                height={256}
                width={256}
                alt="avatar"
                priority
              />
            </motion.div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Text className={classes.title}>{"Hi, I'm Kailon."}</Text>
            <Text className={classes.subtitle}>
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
        </div>
      </div>
    </section>
  );
}

export default Hero;
