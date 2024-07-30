"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>, event?: React.BaseSyntheticEvent) {
    if (event) {
      event.preventDefault();
    }
    setIsLoading(true);
    setSubmitStatus(null);
    try {
      if (!event?.target) {
        throw new Error('Form event is missing');
      }
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!!,
        event.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!!
      );
      
      if (result.text === 'OK') {
        setSubmitStatus("success");
        form.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!!);
  }, [])

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex px-4 mx-auto"
    >
      <div className="isolate mx-auto bg-zinc-900">
      <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.5 }}
  className="mx-auto max-w-2xl text-center"
>
  <motion.h2 
    initial={{ y: -20 }}
    animate={{ y: 0 }}
    transition={{ delay: 0.3, duration: 0.5 }}
    className="text-2xl font-bold leading-9 tracking-tight text-green-500 sm:text-3xl"
  >
    Let's Connect
  </motion.h2>
  <motion.p 
    initial={{ y: 20 }}
    animate={{ y: 0 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-zinc-300"
  >
    Have a question or want to collaborate? I'm all ears! Drop me a message and let's create something amazing together.
  </motion.p>
  <motion.div 
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    className="mt-6 h-1 w-24 bg-green-500 mx-auto"
  />
</motion.div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20 space-y-8">
            {["name", "email", "subject"].map((field) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <FormField
                  control={form.control}
                  name={field as keyof z.infer<typeof formSchema>}
                  render={({ field: fieldProps }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-200">{field.charAt(0).toUpperCase() + field.slice(1)}</FormLabel>
                      <FormControl>
                        <Input placeholder={`Your ${field}`} {...fieldProps} className="bg-zinc-800 border-zinc-700 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-200">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message" {...field} className="bg-zinc-800 border-zinc-700 text-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button type="submit" disabled={isLoading} className="w-full bg-green-600 hover:bg-green-500 text-white">
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </motion.div>
          </form>
        </Form>
        <AnimatePresence>
          {submitStatus && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`mt-4 text-center ${
                submitStatus === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {submitStatus === "success"
                ? "Your message has been sent successfully!"
                : "There was an error sending your message. Please try again."}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}