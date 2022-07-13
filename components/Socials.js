import { BrandGithub, BrandLinkedin } from "tabler-icons-react";

function Socials() {
  return (
    <div className="socials">
      <a
        href="https://github.com/KailonSimon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BrandGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/kailon-simon-59b416230/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BrandLinkedin size={24} />
      </a>
    </div>
  );
}

export default Socials;
