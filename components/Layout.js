import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="h-screen bg-quaternary flex flex-col background">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
