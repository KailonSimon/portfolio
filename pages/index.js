import Head from "next/head";
import Projects from "../sections/Projects";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Contact from "../sections/Contact";

export default function Home({
  projects,
  languages,
  technologies,
  skills,
  resumeURL,
}) {
  return (
    <>
      <Head>
        <title>Kailon Simon | Developer</title>
      </Head>
      <Hero resumeURL={resumeURL} />
      <About languages={languages} technologies={technologies} other={skills} />
      <Projects projects={projects} />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const [projectsRes, languagesRes, technologiesRes, skillsRes, resumeRes] =
    await Promise.all([
      fetch(
        `${process.env.CONTENT_URL}/api/projects?populate[0]=thumbnail&populate[1]=tech_badges.image`
      ),
      fetch(`${process.env.CONTENT_URL}/api/languages?populate=image`),
      fetch(`${process.env.CONTENT_URL}/api/technologies?populate=image`),
      fetch(`${process.env.CONTENT_URL}/api/skills?populate=image`),
      fetch(`${process.env.CONTENT_URL}/api/resume?populate=%2A`),
    ]);

  const [projects, languages, technologies, skills, resume] = await Promise.all(
    [
      projectsRes.json(),
      languagesRes.json(),
      technologiesRes.json(),
      skillsRes.json(),
      resumeRes.json(),
    ]
  );

  return {
    props: {
      projects: projects.data,
      languages: languages.data,
      technologies: technologies.data,
      skills: skills.data,
      resumeURL: resume.data.attributes.resume.data.attributes.url,
    },
    revalidate: 10,
  };
}
