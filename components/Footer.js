import { BrandGithub, BrandLinkedin, BrandGoogle } from "tabler-icons-react";
import Button from "./Button";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <h2 style={{ marginBottom: 8 }}>Contact</h2>
      <div className="social-button-container">
        <Button href="https://github.com/KailonSimon">
          <BrandGithub />
        </Button>

        <Button href="https://www.linkedin.com/in/kailon-simon-59b416230/">
          <BrandLinkedin />
        </Button>

        <Button href="mailto:kailonsimon@gmail.com">
          <BrandGoogle />
        </Button>
      </div>
    </div>
  );
}
