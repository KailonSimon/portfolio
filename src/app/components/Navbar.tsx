"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { config } from "@/config/config";
import HamburgerIcon from "./HamburgerIcon";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = Object.entries(config.externalLinks.navigation).map(([key, path]) => ({
    path,
    label: key.charAt(0).toUpperCase() + key.slice(1),
  }));

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900 text-white p-4 z-50 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-500">
          {config.personalInfo.name}
        </Link>
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <NavigationMenuLink
                    href={item.path}
                    className="text-white hover:text-green-500 uppercase transition duration-300 font-medium px-4 py-2"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-green-500 z-50"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Menu"
        >
          {isOpen ? (
           <HamburgerIcon isOpen={isOpen} />
          ) : (
            <HamburgerIcon isOpen={isOpen} />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-zinc-900 flex items-center justify-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.ul
              className="text-center space-y-8"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navItems.map((item) => (
                <motion.li key={item.path} variants={itemVariants}>
                  <Link
                    href={item.path}
                    className="text-3xl font-bold text-white hover:text-green-500 transition duration-300"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;