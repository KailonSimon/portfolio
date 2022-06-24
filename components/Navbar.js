import React from "react";
import { Menu2 } from "tabler-icons-react";

function Navbar() {
  return (
    <div className="w-full h-16 flex items-center justify-center mb-8 navbar">
      <div className="w-full max-w-6xl flex items-center justify-between px-4">
        <div className="md:hidden menu-button">
          <Menu2 />
        </div>
        <h1 className="logo">Kailon Simon</h1>
        <div className="hidden md:flex md:gap-4">
          <button className="bg-quaternary">Home</button>
          <button className="bg-quaternary">Projects</button>
          <button className="bg-quaternary">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
