'use client'

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { config } from "@/config/config";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: Github,
    email: Mail,
  };

  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-green-500 mb-4"
            >
              {config.personalInfo.name}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              {config.personalInfo.description}
            </motion.p>
            <div className="flex space-x-4">
              {Object.entries(config.externalLinks.social).map(([key, href], index) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-green-500 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    aria-label={key}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </div>
       
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Get in Touch</h3>
            <p className="mb-4">Interested in working together? Let's connect!</p>
            <Button className="w-full bg-green-600 hover:bg-green-500 text-white" asChild>
              <Link href={config.externalLinks.navigation.contact}>
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
        <motion.div 
          className="border-t border-zinc-800 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm mb-4">
            &copy; {currentYear} {config.personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500">
            Designed and built with Next.js and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;