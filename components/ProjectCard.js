import React from "react";

export default function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-card-content"></div>
      <div className="project-card-title">
        <h2>Project Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="project-card-footer">
        <div className="project-tags">
          <div className="project-tag">React</div>
          <div className="project-tag">CSS</div>
          <div className="project-tag">Redux</div>
        </div>
      </div>
    </div>
  );
}
