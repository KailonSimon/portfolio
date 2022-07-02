import { useState, useRef } from "react";
import MenuButton from "./MenuButton";

const sidebar = {
  opened: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Navbar() {
  const [isOpen, toggleOpen] = useState(false);
  const containerRef = useRef(null);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <h1 className="logo">Kailon Simon</h1>
          <div id="nav-button-container">
            <a href="#hero">Home</a>
            <a href="#projects">Projects</a>
            <a href="#footer">Contact</a>
          </div>
        </div>
      </nav>
      <nav className="mobile-navbar">
        <div className="navbar-inner">
          <h1 className="logo">KS</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <MenuButton />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
