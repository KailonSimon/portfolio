import { motion } from "framer-motion";

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  const lineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: {
      rotate: 45,
      translateY: 8,
    },
  };

  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const line3Variants = {
    closed: { rotate: 0, translateY: 0 },
    open: {
      rotate: -45,
      translateY: -8,
    },
  };

  return (
    <div className="flex flex-col justify-around h-6 w-6">
      <motion.span
        variants={lineVariants}
        animate={isOpen ? "open" : "closed"}
        className="block h-0.5 w-full bg-white"
      />
      <motion.span
        variants={line2Variants}
        animate={isOpen ? "open" : "closed"}
        className="block h-0.5 w-full bg-white"
      />
      <motion.span
        variants={line3Variants}
        animate={isOpen ? "open" : "closed"}
        className="block h-0.5 w-full  bg-white"
      />
    </div>
  );
};

export default HamburgerIcon;
