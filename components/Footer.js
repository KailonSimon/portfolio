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
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.blue[3],
    position: "relative",
    zIndex: 998,
    borderTopLeftRadius: 640,
    borderTopRightRadius: 640,
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
