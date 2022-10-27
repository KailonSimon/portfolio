import { useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  navList: {
    display: "flex",
    gap: "3rem",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "5vh",
      flex: 1,
    },
  },
  navItem: {
    cursor: "pointer",
  },
}));

const links = [
  { href: "hero", text: "Home" },
  { href: "about", text: "About" },
  { href: "projects", text: "Projects" },
  { href: "contact", text: "Contact" },
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

function NavLinks({ mobile, handleClick, resumeURL }) {
  const { classes } = useStyles();
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  if (mobile) {
    return (
      <motion.ul
        className={classes.navList}
        variants={list}
        initial="hidden"
        animate="show"
      >
        {links.map((link) => {
          return (
            <motion.li
              className={classes.navItem}
              key={link.text}
              variants={item}
            >
              <Link
                to={link.href}
                spy={true}
                smooth={true}
                duration={250}
                activeClass="active"
                onClick={handleClick}
              >
                {link.text}
              </Link>
            </motion.li>
          );
        })}
        <motion.li className={classes.navItem} variants={item}>
          <a href={resumeURL} target="_blank" rel="noreferrer">
            Resume
          </a>
        </motion.li>
      </motion.ul>
    );
  }
  return (
    <ul className={classes.navList}>
      {links.map((link) => {
        return (
          <li className={classes.navItem} key={link.text}>
            <Link
              to={link.href}
              spy={true}
              smooth={true}
              offset={-100}
              duration={250}
              activeClass="active"
            >
              {link.text}
            </Link>
          </li>
        );
      })}
      <li className={classes.navItem}>
        <a href={resumeURL} target="_blank" rel="noreferrer">
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
