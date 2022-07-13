import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ParticlesBackground } from "./Particles";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <ParticlesBackground />
      <Navbar />
      <main className="content-wrapper">{children}</main>
      <Footer />
    </div>
  );
}
