import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="h-screen bg-quaternary flex flex-col background">
      <Navbar />
      <main style={{ marginTop: 66, padding: "16px 0" }}>{children}</main>
      <Footer />
    </div>
  );
}
