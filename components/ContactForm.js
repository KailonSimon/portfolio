import { useState } from "react";
import {
  Button,
  createStyles,
  LoadingOverlay,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import emailjs from "@emailjs/browser";
import { ChaoticOrbit } from "@uiball/loaders";
import { Check } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    maxWidth: 600,
  },
  form: {
    borderRadius: 8,
    width: "100%",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    border: "2px solid #000",
    filter: "drop-shadow(0.5rem 0.2rem 0.25rem #000)",
    padding: "1rem 2rem",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  label: {
    color: "#fff",
  },
}));

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      name: (value) => (value ? null : "Please enter your name"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) => (value ? null : "Please enter a message"),
    },
  });

  const handleSubmit = () => {
    setIsLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.values,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          showNotification({
            title: "Message sent!",
            message: "I will get back to you shortly 😃",
            autoClose: 5000,
            color: "brand",
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.dark[7],
                borderRadius: 8,
                border: "2px solid #000",
                boxShadow: "black 4px 4px 0 0",
              },
            }),
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .catch((error) => console.error(error))
      .finally(form.reset(), setIsLoading(false));
  };

  return (
    <div className={classes.container}>
      <LoadingOverlay
        visible={isLoading}
        loader={<ChaoticOrbit size={25} speed={1} color="#D92B00" />}
        radius="sm"
      />
      <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Name"
          placeholder="Name"
          size="lg"
          {...form.getInputProps("name")}
          radius="xs"
          classNames={{ label: classes.label }}
          spellCheck="false"
        />
        <TextInput
          label="Email"
          placeholder="your@email.com"
          size="lg"
          {...form.getInputProps("email")}
          radius="xs"
          classNames={{ label: classes.label }}
        />
        <Textarea
          label="Message"
          placeholder="Message"
          size="lg"
          {...form.getInputProps("message")}
          radius="xs"
          classNames={{ label: classes.label }}
        />
        <Button
          mt={12}
          uppercase
          style={{ alignSelf: "flex-end", width: "40%", minWidth: 100 }}
          radius="xs"
          type="submit"
          disabled={isLoading}
          color="brand"
          size="lg"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
