import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ParticlesBackground } from "./Particles";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  contentWrapper: {
    minHeight: "calc(100vh - 128px)",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 1rem",
  },
}));

export default function Layout({ children }) {
  const { classes } = useStyles();
  return (
    <div>
      <ParticlesBackground />
      <Navbar />
      <main className={classes.contentWrapper}>{children}</main>
      <Footer />
    </div>
  );
}
