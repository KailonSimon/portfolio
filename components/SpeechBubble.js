import { motion } from "framer-motion";

export default function SpeechBubble({ text, variants, flipped }) {
  return (
    <motion.div
      className={`bubble speech ${flipped && "flipped"}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      variants={variants}
    >
      <p>{text}</p>
    </motion.div>
  );
}
