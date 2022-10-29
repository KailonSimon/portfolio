import { BrandGithub, BrandLinkedin } from "tabler-icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  socials: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "fit-content",
    width: 150,
    marginTop: 8,
    color: theme.colors.brand,
    [theme.fn.smallerThan("md")]: {
      marginTop: 0,
      padding: "1rem 0",
    },
  },
  socialButton: {
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

function Socials() {
  const { classes } = useStyles();
  const matches = useMediaQuery("(max-width: 900px)", false);
  return (
    <div className={classes.socials}>
      <a
        href="https://github.com/KailonSimon"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.socialButton}
      >
        <BrandGithub size={matches ? "8vh" : 30} />
      </a>
      <a
        href="https://www.linkedin.com/in/kailon-simon-59b416230/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.socialButton}
      >
        <BrandLinkedin size={matches ? "8vh" : 30} />
      </a>
    </div>
  );
}

export default Socials;
