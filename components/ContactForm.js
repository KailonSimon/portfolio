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
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.blue[1]
    }`,
    padding: "1rem 2rem",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  label: {
    color: "#fff",
  },
  input: {
    "&:focus": {
      borderColor: "#290099",
    },
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
            color: "green",
            icon: <Check />,
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.dark[7],
                borderRadius: 8,
                border: `2px solid ${theme.colors.dark[3]}`,
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
          {...form.getInputProps("name")}
          radius="xs"
          classNames={{ label: classes.label, input: classes.input }}
          spellCheck="false"
        />
        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
          radius="xs"
          classNames={{ label: classes.label, input: classes.input }}
        />
        <Textarea
          label="Message"
          placeholder="Message"
          {...form.getInputProps("message")}
          radius="xs"
          classNames={{ label: classes.label, input: classes.input }}
        />
        <Button
          mt={8}
          variant="gradient"
          gradient={{ from: "purple", to: "orange", deg: 45 }}
          uppercase
          style={{ alignSelf: "flex-end", width: "40%", minWidth: 100 }}
          radius="xs"
          type="submit"
          disabled={isLoading}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
