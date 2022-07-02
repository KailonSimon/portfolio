import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-25vh" },
};

function Hero() {
  return (
    <section id="hero">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1.25 }}
      >
        <h1 className="hero-subtitle">{"Hi, my name is Kailon"}</h1>
        <h1 className="hero-title">
          Full Stack <span>Web</span> Developer
        </h1>
      </motion.div>
    </section>
  );
}

export default Hero;
