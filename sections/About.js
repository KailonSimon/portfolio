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
  const technologies = ["React", "Next.js", "Redux", "Android", "Node", "Git"];
  const other = ["Tailwind", "Bootstrap", "Blender", "Firebase"];
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
