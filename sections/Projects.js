import { createStyles, Title, Text } from "@mantine/core";
import ProjectCard from "../components/ProjectCard";
import { Carousel } from "@mantine/carousel";

const useStyles = createStyles((theme) => ({
  content: {
    height: "fit-content",
    width: "100%",
    maxWidth: "100vw",
    marginTop: "2rem",
    position: "relative",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    textAlign: "center",
    position: "relative",
  },
  projectsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  carouselIndicators: {
    position: "relative",
    marginTop: 24,
  },
}));

export default function Projects({ projects }) {
  const { classes } = useStyles();
  return (
    <section id="projects" className={classes.content}>
      <Title
        order={2}
        component={Text}
        className={classes.title}
        variant="gradient"
        gradient={{ from: "purple", to: "orange", deg: 45 }}
      >
        Projects
      </Title>
      {projects ? (
        <div className={classes.projectsContainer}>
          <Carousel
            slideSize="33.33%"
            withControls={false}
            slideGap="md"
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]}
            withIndicators
            classNames={{ indicators: classes.carouselIndicators }}
          >
            {projects.map((project) => {
              return (
                <Carousel.Slide key={project.id}>
                  <ProjectCard project={project.attributes} />
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      ) : null}
    </section>
  );
}
