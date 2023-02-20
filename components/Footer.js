import { createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    fontWeight: 400,
    minHeight: "4rem",
    backgroundColor: "#121212",
    padding: "1rem",
    color: theme.white,
    position: "relative",
    zIndex: 998,
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  const today = new Date();
  return (
    <div className={classes.footer} id="footer">
      <Text>{`Designed & Built by Kailon Simon © ${today.getFullYear()}`}</Text>
    </div>
  );
}
