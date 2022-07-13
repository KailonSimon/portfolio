import React from "react";
import { Link } from "react-scroll";

const links = [
  { href: "hero", text: "Home" },
  { href: "about", text: "About" },
];

function NavLinks({ handleClick }) {
  return (
    <ul className="nav-list">
      {links.map((link) => {
        return (
          <li className="nav-item" key={link.text}>
            <Link
              to={link.href}
              spy={true}
              smooth={true}
              offset={-75}
              duration={100}
              activeClass="active"
              onSetActive={handleClick}
            >
              {link.text}
            </Link>
          </li>
        );
      })}
      <li className="nav-item">
        <a href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
