import Image from "next/image";
import { BrandGithub } from "tabler-icons-react";
import Button from "./Button";

export default function ProjectCard({ project }) {
  const { title, info, tags, repo, url } = project;

  return (
    <div className="project-card">
      <div className="project-card-title">
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
      <div className="project-card-footer">
        <div className="project-tags">
          {tags.map((tag) => {
            return (
              <div className="project-tag" key={tag}>
                <Image
                  src={`/icons/${tag.toLowerCase()}.svg`}
                  alt={tag}
                  height={15}
                  width={15}
                />
                {tag}
              </div>
            );
          })}
        </div>
      </div>

      <div className="project-links">
        <Button href={repo}>
          <BrandGithub />
        </Button>
        <Button href={url}>Go to</Button>
      </div>
    </div>
  );
}
