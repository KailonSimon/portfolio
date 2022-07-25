import { createStyles, Title, Text } from "@mantine/core";
import ContactForm from "../components/ContactForm";

const useStyles = createStyles((theme) => ({
  content: {
    height: "fit-content",
    width: "100%",
    maxWidth: "100vw",
    marginTop: "2rem",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    color: theme.colorScheme === "dark" ? theme.colors.blue[3] : theme.white,
    marginBottom: "0.5rem",
    textAlign: "center",
    position: "relative",
  },
}));

export default function Contact() {
  const { classes } = useStyles();
  return (
    <section id="contact" className={classes.content}>
      <Title
        order={2}
        component={Text}
        className={classes.title}
        variant="gradient"
        gradient={{ from: "purple", to: "orange", deg: 45 }}
      >
        Contact
      </Title>
      <ContactForm />
    </section>
  );
}
