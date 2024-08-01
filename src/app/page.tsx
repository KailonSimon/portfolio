import AboutSection from "./components/About/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import { getLanguagesData } from "./utils/getLanguagesData";

export const dynamic = 'force-dynamic'

async function getProjectsData() {
  const res = await fetch(
    `${process.env.CONTENT_URL}/api/projects?populate[0]=thumbnail&populate[1]=tech_badges.image`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const { data: projects } = await getProjectsData();
  const { data: languages } = await getLanguagesData();

  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection languages={languages} />
      <ProjectSection projects={projects} />
    </div>
  );
}
