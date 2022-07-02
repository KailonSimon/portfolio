import { motion } from "framer-motion";
import Head from "next/head";
import Projects from "../sections/Projects";
import Hero from "../sections/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kailon Simon | Developer</title>
      </Head>
      <Hero />
      <Projects />
    </>
  );
}
