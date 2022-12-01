import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  navList: {
    display: "flex",

    [theme.fn.smallerThan("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      width: 600,
      maxWidth: "100%",
    },
  },
  navItem: {
    position: "relative",
    cursor: "pointer",
    color: theme.colors.brand,

    ":not(:last-child)": {
      marginRight: "3rem",
    },

    [theme.fn.smallerThan("md")]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      "&:hover": {
        background: theme.colors.brand,
        color: "#121212",
      },
      ":not(:last-child)": {
        margin: "0 0 5vh 0",
      },
    },
  },
}));

const links = [
  { href: "hero", text: "Home" },
  { href: "projects", text: "Projects" },
  { href: "about", text: "About" },
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
  const [selected, setSelected] = useState(0);

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
                offset={-80}
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
      {links.map((link, i) => {
        return (
          <motion.li
            className={classes.navItem}
            key={link.text}
            animate={{ opacity: selected === i ? 1 : 0.5 }}
            whileHover={{ opacity: 1 }}
          >
            <Link
              to={link.href}
              spy={true}
              smooth={true}
              offset={-128}
              duration={250}
              activeClass="active"
              onClick={() => setSelected(i)}
              onSetActive={() => setSelected(i)}
            >
              {selected === i ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
              {link.text}
            </Link>
          </motion.li>
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
