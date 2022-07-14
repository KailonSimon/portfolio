import Image from "next/image";
import { BrandGithub } from "tabler-icons-react";
import { Button, Badge } from "@mantine/core";

export default function ProjectCard({ project }) {
  const { title, info, tags, repo, url } = project;

  return (
    <div className="project-card">
      <div className="project-card-title">
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        <p>{info}</p>
      </div>
      <div className="project-card-footer">
        <div className="project-tags">
          {tags.map((tag) => {
            return (
              <Badge
                key={tag}
                leftSection={
                  <Image
                    src={`/icons/${tag.toLowerCase()}.svg`}
                    alt={tag}
                    height={15}
                    width={15}
                  />
                }
                size="lg"
                variant="filled"
                color="gray"
              >
                {tag}
              </Badge>
            );
          })}
        </div>
      </div>

      <div className="project-links">
        <Button
          component="a"
          href={repo}
          target="_blank"
          variant="gradient"
          gradient={{ from: "#99aab5", to: "#7289da", deg: 35 }}
        >
          <BrandGithub />
        </Button>
        <Button
          component="a"
          href={url}
          target="_blank"
          variant="gradient"
          gradient={{ from: "#99aab5", to: "#7289da", deg: 35 }}
          uppercase
        >
          Check it out
        </Button>
      </div>
    </div>
  );
}
