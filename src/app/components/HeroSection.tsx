"use client";

import React from "react";
import { BrandGithub, BrandLinkedin, Mail, Icon as TablerIcon } from "tabler-icons-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'

interface SocialLinkProps {
  href: string;
  icon: TablerIcon;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon }) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      target="_blank"
      rel="noreferrer"
      href={href}
      className="text-green-500 hover:text-green-400 bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition duration-300"
    >
      <Icon size={24} />
    </motion.a>
  );
};

const HeroSection: React.FC = () => {
  const router = useRouter()
  return (
    <section id="hero" className="flex justify-center items-center py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="w-72 h-72 lg:w-96 lg:h-96 relative"
          >
            <Image
              src="/avatar.svg"
              fill
              alt="Avatar of Kailon"
              priority
              className="rounded-full bg-green-500 shadow-lg border-8 border-zinc-800 object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Hi, I'm <span className="text-green-500">Kailon</span>.
            </h1>
            <p className="text-2xl lg:text-3xl text-zinc-300">Full Stack Web Developer</p>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Crafting elegant, user-centric web solutions with a passion for clean code and innovative design.
            </p>
            <div className="flex gap-6 mt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
              
                className="bg-green-500 hover:bg-green-400 text-zinc-900 font-bold py-3 px-6 rounded-full transition duration-300 flex items-center"
              >
                View My Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/contact");
               }}
                className="bg-zinc-800 hover:bg-zinc-700 text-green-500 font-bold py-3 px-6 rounded-full transition duration-300 flex items-center"
              >
                Get in Touch
              </motion.a>
            </div>
            <div className="flex gap-6 mt-6">
              <SocialLink href="https://github.com/KailonSimon" icon={BrandGithub} />
              <SocialLink href="https://linkedin.com/in/kailonsimon" icon={BrandLinkedin} />
              <SocialLink href="mailto:kailon@example.com" icon={Mail} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;