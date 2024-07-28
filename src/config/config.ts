export const config = {
    externalLinks: {
      social: {
        github: "https://github.com/KailonSimon",
        email: "mailto:kailon@example.com",
      },
      navigation: {
        home: "/",
        about: "/#about",
        services: "/services",
        projects: "/#projects",
        contact: "/contact",
      },
      legal: {
        privacy: "/privacy",
        terms: "/terms",
      },
    },
    personalInfo: {
      name: "Kailon Simon",
      title: "Full-Stack Web Developer",
      description: "Passionate about creating engaging digital experiences.",
    }, 
    latestProjects: [
      { name: "Project 1", url: "/projects/project1" },
      { name: "Project 2", url: "/projects/project2" },
      { name: "Project 3", url: "/projects/project3" },
    ],
  };
  
  export type Config = typeof config;