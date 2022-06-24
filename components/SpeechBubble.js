import { motion } from "framer-motion";

export default function SpeechBubble({ text, variants, flipped }) {
  return (
    <div className={`bubble speech ${flipped && "flipped"}`}>
      <p className={flipped && "flipped"}>{text}</p>
    </div>
  );
}
