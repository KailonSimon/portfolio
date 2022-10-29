import Footer from "./Footer";
import Navbar from "./Navbar";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  contentWrapper: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 1rem 4rem",
    margin: "4rem 0 0",
    position: "relative",
  },
  background: {
    position: "fixed",
    height: "calc(100% - 64px)",
    width: "100%",
    zIndex: 999,
    boxShadow: "inset 0 0 5vw 0.5rem #000",
  },
}));

export default function Layout({ children, ...pageProps }) {
  const { classes } = useStyles();
  const { resumeURL } = pageProps;

  return (
    <>
      <Navbar resumeURL={resumeURL} />
      <div className={classes.background} />
      <main className={classes.contentWrapper}>{children}</main>
      <Footer />
    </>
  );
}
