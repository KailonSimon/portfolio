"use client";

import React from "react";
import { Language } from "@/types/api/language";
import Image from "next/image";
import { motion } from "framer-motion";

interface SkillsGridProps {
  languages: Language[];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ languages }) => {
  return (
    <div className="mt-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-green-500 mb-12"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {languages.map((language, index) => (
            <SkillCard key={language.id} language={language} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

interface SkillCardProps {
  language: Language;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ language, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-zinc-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg transition-all duration-300"
    >
      <div className="relative w-16 h-16 mb-4">
        <Image
          src={language.attributes.image?.data.attributes.url || ''}
          alt={language.attributes.name}
          fill
        />
      </div>
      <h3 className="text-lg font-semibold text-zinc-200 text-center">
        {language.attributes.name}
      </h3>
    
    </motion.div>
  );
};

export default SkillsGrid;