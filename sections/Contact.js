import { createStyles, Title, Text } from "@mantine/core";
import ContactForm from "../components/ContactForm";

const useStyles = createStyles((theme) => ({
  content: {
    height: "fit-content",
    width: "100%",
    maxWidth: 1280,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4rem",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    color: theme.colors.brand,
    marginBottom: "0.5rem",
    textAlign: "center",
    position: "relative",
    letterSpacing: 1.25,
  },
}));

export default function Contact() {
  const { classes } = useStyles();
  return (
    <section id="contact" className={classes.content}>
      <Title order={2} component={Text} className={classes.title}>
        Contact
      </Title>
      <ContactForm />
    </section>
  );
}
