import React from "react";
import Image from "next/image";
import AboutCard from "../components/AboutCard";

function About() {
  const languages = [
    "JavaScript",
    "TypeScript",
    "CSS",
    "HTML",
    "Java",
    "Kotlin",
  ];
  const technologies = ["React", "Next.js", "Redux", "Git", "Node", "Android"];
  const other = ["Tailwind", "Bootstrap", "MUI"];
  return (
    <section id="about" className="content">
      <h3 className="section-title">Skills</h3>
      <div className="about-card-container">
        <AboutCard title="Languages" skills={languages} />
        <AboutCard title="Technologies" skills={technologies} />
        <AboutCard title="Other" skills={other} />
      </div>
    </section>
  );
}

export default About;
