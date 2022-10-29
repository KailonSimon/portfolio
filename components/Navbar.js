import { Drawer, Burger, createStyles } from "@mantine/core";
import { useState } from "react";
import NavLinks from "./NavLinks";
import Socials from "./Socials";
import { measureHeight } from "react-div-100vh";

const useStyles = createStyles((theme) => ({
  header: {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 999,
    backgroundColor: "#121212",
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
    height: "calc(100vh - var(nav-height))",
    boxShadow: "inset 0 0 5vw 0.5rem #000",
    marginTop: "var(--nav-height)",
    padding: "1rem",
  },
  logo: {
    color: theme.colors.brand,
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
    background: "#121212",
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
}));

export default function Navbar({ resumeURL }) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const componentHeight = measureHeight() - 64;

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div>
          <a className={classes.logo} id="logo" href="#">
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
            color="#33ff33"
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
        <div
          className={classes.drawerContent}
          style={{ height: componentHeight }}
        >
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
