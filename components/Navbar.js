import { Drawer, Burger, createStyles } from "@mantine/core";
import { useState } from "react";
import NavLinks from "./NavLinks";
import Socials from "./Socials";

const useStyles = createStyles((theme) => ({
  header: {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 999,
    backgroundColor:
      theme.colorScheme === "dark"
        ? "rgba(56, 56, 56, 0.95)"
        : "rgba(255, 255, 255, 0.95)",
    letterSpacing: 1.5,
  },
  nav: {
    height: "4rem",
    width: "calc(100% - 2rem)",
    maxWidth: 1280,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
  },
  drawerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "5vh",
    width: "100%",
    height: "100%",
  },
  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.primaryColor,
    fontSize: "1.25rem",
  },
  menu: {
    fontSize: "1.25rem",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  navToggle: {
    display: "flex",
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
  socials: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  drawer: {
    display: "flex",
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
}));

export default function Navbar({ resumeURL }) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div>
          <a className={classes.logo} href="#">
            Kailon Simon
          </a>
        </div>
        <div className={classes.menu} id="nav-menu">
          <NavLinks
            mobile={false}
            handleClick={() => setOpened(!opened)}
            resumeURL={resumeURL}
          />
        </div>
        <div className={classes.socials}>
          <Socials />
        </div>
        <div className={classes.navToggle}>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
          />
        </div>
      </nav>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size="full"
        withOverlay={false}
        transition="slide-down"
        styles={{
          closeButton: { display: "none" },
          header: { display: "none" },
        }}
        classNames={{ drawer: classes.drawer }}
      >
        <div className={classes.drawerContent}>
          <NavLinks
            mobile={true}
            handleClick={() => setOpened(!opened)}
            resumeURL={resumeURL}
          />
          <Socials />
        </div>
      </Drawer>
    </header>
  );
}
