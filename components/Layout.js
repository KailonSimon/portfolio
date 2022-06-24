import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="h-screen bg-main flex flex-col">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
