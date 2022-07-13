import { BrandGithub, BrandLinkedin } from "tabler-icons-react";
import { useMediaQuery } from "@mantine/hooks";

function Socials() {
  const matches = useMediaQuery("(max-width: 900px)", false);
  return (
    <div className="socials">
      <a
        href="https://github.com/KailonSimon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BrandGithub size={matches ? "3rem" : 24} />
      </a>
      <a
        href="https://www.linkedin.com/in/kailon-simon-59b416230/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BrandLinkedin size={matches ? "3rem" : 24} />
      </a>
    </div>
  );
}

export default Socials;
