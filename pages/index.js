import { motion } from "framer-motion";
import Head from "next/head";
import ComicPage from "../components/ComicPage";
import SpeechBubble from "../components/SpeechBubble";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kailon Simon | Developer</title>
      </Head>
      <ComicPage />
    </>
  );
}
