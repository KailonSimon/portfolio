import Image from "next/image";
import React from "react";

function AboutCard({ title, skills }) {
  return (
    <div className="about-card">
      <div className="about-card-title">{title}</div>
      <div className="about-card-content">
        {skills.map((skill) => (
          <div
            key={skill}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>{skill}</span>
            <Image
              src={`/icons/${skill.toLowerCase()}.svg`}
              alt={skill}
              height={25}
              width={25}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutCard;
