import { Drawer, Burger } from "@mantine/core";
import { useState } from "react";
import NavLinks from "./NavLinks";
import Socials from "./Socials";

export default function Navbar() {
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
          <NavLinks mobile={false} />
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
        withOverlay={false}
        transition="slide-down"
      >
        <div className="drawer-content">
          <NavLinks mobile={true} handleClick={() => setOpened(!opened)} />
          <Socials />
        </div>
      </Drawer>
    </header>
  );
}
