"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillsGrid from "./SkillsGrid";
import { Language } from "@/types/api/language";
import { Code, Briefcase, Music, Mountain } from "lucide-react";

interface AboutSectionProps {
  languages?: Language[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ languages }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-green-500 mb-12"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-1/2 space-y-6 text-zinc-300"
          >
            <p className="text-xl leading-relaxed">
              Hello! I'm Kailon Simon, a passionate Full-Stack Web Developer with a keen eye for creating engaging, user-centric digital experiences. With over five years in the field, I've honed my skills in crafting responsive, high-performance web applications that not only meet but exceed modern business needs.
            </p>
            <p className="text-xl leading-relaxed">
              My approach combines technical expertise with creative problem-solving, ensuring that each project I undertake is both functionally robust and aesthetically pleasing. I'm constantly exploring new technologies and methodologies to stay at the forefront of web development trends.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <HighlightBox icon={<Code size={24} />} text="Full-Stack Development" />
              <HighlightBox icon={<Briefcase size={24} />} text="5+ Years Experience" />
              <HighlightBox icon={<Music size={24} />} text="Music Enthusiast" />
              <HighlightBox icon={<Mountain size={24} />} text="Avid Hiker" />
            </div>
          </motion.div>
        </div>
      </div>
      {languages && <SkillsGrid languages={languages} />}
    </section>
  );
};

interface HighlightBoxProps {
  icon: React.ReactNode;
  text: string;
}

const HighlightBox: React.FC<HighlightBoxProps> = ({ icon, text }) => (
  <div className="flex items-center bg-zinc-800 rounded-lg p-3 shadow-md">
    <span className="text-green-500 mr-3">{icon}</span>
    <span className="text-zinc-300 font-medium">{text}</span>
  </div>
);

export default AboutSection;