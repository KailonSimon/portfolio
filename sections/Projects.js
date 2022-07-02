import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = ["a", "b", "c"];

export default function Projects() {
  return (
    <section id="projects">
      <h2 style={{ fontWeight: 600, fontSize: "4rem" }}>Projects</h2>
      <div className="projects-container">
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
