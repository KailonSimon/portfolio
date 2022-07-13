import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Trivia Quiz Game",
    info: "A full stack trivia game using the Open Trivia Database API",
    tags: ["React", "Next.js", "TypeScript", "Prisma"],
    repo: "https://github.com/KailonSimon/trivia-q",
    url: "https://trivia-q.vercel.app/",
  },
  {
    title: "Chatbot",
    info: "An artificial chat bot interface using OpenAI's GPT-3 API",
    tags: ["React", "JavaScript", "CSS"],
    repo: "https://github.com/KailonSimon/chatbot",
    url: "https://chatbot-drab.vercel.app/",
  },
  {
    title: "Pet Adoption App",
    info: "A website to show live and historic sports statistics",
    tags: ["React", "Next.js", "JavaScript", "CSS"],
    repo: "https://github.com/KailonSimon/pet-deck",
    url: "",
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
