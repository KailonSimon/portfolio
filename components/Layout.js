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

export default function Layout({ children, ...pageProps }) {
  const { classes } = useStyles();
  const { resumeURL } = pageProps;

  return (
    <>
      <ParticlesBackground />
      <Navbar resumeURL={resumeURL} />
      <main className={classes.contentWrapper}>{children}</main>
      <Footer />
    </>
  );
}
