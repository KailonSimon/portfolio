import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Trivia Quiz Game",
    info: "A full stack trivia game using the [PLACEHOLDER] api",
    tags: ["React", "Next.js", "TypeScript", "Prisma", "CSS"],
  },
  {
    title: "Pet App",
    info: "A website to show live and historic sports statistics",
    tags: ["React", "Next.js", "CSS", "MUI", "Git"],
  },
  {
    title: "Sports Statistics App",
    info: "A website to show live and historic sports statistics",
    tags: ["React", "Next.js", "CSS", "MUI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="content">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.title} />;
        })}
      </div>
    </section>
  );
}
