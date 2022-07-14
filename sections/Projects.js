import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Trivia Quiz Game",
    info: "A full stack trivia game using the Open Trivia Database API",
    tags: ["TypeScript", "React", "Next.js", "Prisma", "Redux"],
    repo: "https://github.com/KailonSimon/trivia-q",
    url: "https://trivia-q.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="content">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </div>
    </section>
  );
}
