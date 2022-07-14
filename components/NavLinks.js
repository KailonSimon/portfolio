import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const links = [
  { href: "hero", text: "Home" },
  { href: "about", text: "About" },
  { href: "projects", text: "Projects" },
];

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

function NavLinks({ mobile, handleClick }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start();
  }, [controls]);

  if (mobile) {
    return (
      <motion.ul
        className="nav-list"
        variants={list}
        initial="hidden"
        animate="show"
      >
        {links.map((link) => {
          return (
            <motion.li className="nav-item" key={link.text} variants={item}>
              <Link
                to={link.href}
                spy={true}
                smooth={true}
                offset={-100}
                duration={250}
                activeClass="active"
                onClick={handleClick}
              >
                {link.text}
              </Link>
            </motion.li>
          );
        })}
        <motion.li className="nav-item" variants={item}>
          <a href={"/resume.pdf"} target="_blank" rel="noreferrer">
            Resume
          </a>
        </motion.li>
      </motion.ul>
    );
  }
  return (
    <ul className="nav-list">
      {links.map((link) => {
        return (
          <li className="nav-item" key={link.text}>
            <Link
              to={link.href}
              spy={true}
              smooth={true}
              offset={-100}
              duration={250}
              activeClass="active"
              //onSetActive={handleClick}
            >
              {link.text}
            </Link>
          </li>
        );
      })}
      <li className="nav-item">
        <a href={"/resume.pdf"} target="_blank" rel="noreferrer">
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
