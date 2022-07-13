import { Drawer, Burger } from "@mantine/core";
import { useState } from "react";
import NavLinks from "./NavLinks";
import Socials from "./Socials";

function Navbar() {
  const [opened, setOpened] = useState(false);

  return (
    <header>
      <nav className="nav grid">
        <div>
          <a className="logo" href="#">
            Kailon Simon
          </a>
        </div>
        <div className="nav-menu" id="nav-menu">
          <NavLinks handleClick={() => setOpened(false)} />
        </div>
        <div className="nav-socials">
          <Socials />
        </div>
        <Burger
          className="nav-toggle"
          opened={opened}
          onClick={() => setOpened(!opened)}
          size="sm"
        />
      </nav>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size="full"
        position="right"
        withOverlay={false}
      >
        <div className="drawer-content">
          <NavLinks />
          <Socials />
        </div>
      </Drawer>
    </header>
  );
}

export default Navbar;
