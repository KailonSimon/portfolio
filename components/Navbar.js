import { Link } from "react-scroll";
import { BrandGithub, BrandLinkedin } from "tabler-icons-react";
import MenuButton from "./MenuButton";

const links = [
  { href: "hero", text: "Home" },
  { href: "about", text: "About" },
];

function Navbar() {
  return (
    <header>
      <nav className="nav grid">
        <div>
          <a className="logo" href="#">
            Kailon Simon
          </a>
        </div>
        <div className="nav-menu" id="nav-menu">
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
        </div>
        <div className="nav-socials">
          <a
            href="https://github.com/KailonSimon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kailon-simon-59b416230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandLinkedin size={24} />
          </a>
        </div>
        <div className="nav-toggle">
          <MenuButton />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
