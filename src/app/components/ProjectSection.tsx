"use client";

import React from "react";
import { Project } from "@/types/api/project";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectSectionProps {
  projects: Project[];
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="py-8 md:py-16 lg:py-24">
      <motion.div 
        className="container mx-auto px-4 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col h-full border-2 border-zinc-800"
      variants={cardVariants}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.attributes.thumbnail?.data.attributes.url || ""}
          alt={project.attributes.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2 text-green-500">
          {project.attributes.name}
        </h3>
        <p className="text-zinc-300 mb-4 flex-grow">
          {project.attributes.description}
        </p>
        <div className="mb-4 h-20 overflow-y-auto">
          <div className="flex flex-wrap gap-2">
            {project.attributes.tech_badges!!.data.map((badge) => (
              <span key={badge.id} className="bg-zinc-700 text-zinc-300 px-2 py-1 rounded-md text-sm">
                {badge.attributes.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-auto gap-4">
          <Button
            asChild
            variant="default"
            className="bg-green-500 text-zinc-900 hover:bg-green-400 flex-grow"
          >
           <a 
              href={project.attributes.demoURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} className="mr-2" />
              Live Demo
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="bg-zinc-700 text-zinc-300 hover:bg-zinc-600 flex-grow"
          >
            <a
              href={project.attributes.githubURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} className="mr-2" />
              Source Code
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;