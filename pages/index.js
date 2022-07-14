import Head from "next/head";
import Projects from "../sections/Projects";
import Hero from "../sections/Hero";
import About from "../sections/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kailon Simon | Developer</title>
      </Head>
      <Hero />
      <About />
      <Projects />
    </>
  );
}
