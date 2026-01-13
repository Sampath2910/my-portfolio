import React, { useState, useEffect } from "react";
import { Github, Linkedin, Download, X } from "lucide-react";
import profile from "../assets/profile.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <header className="flex flex-col md:flex-row justify-between items-center py-4 px-6 
                         bg-white/80 dark:bg-black/80 shadow-md fixed top-0 left-0 w-full 
                         z-50 backdrop-blur-lg transition-all duration-500">

        {/* LEFT SECTION – PHOTO + NAME */}
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt="Akkapally Sampath"
            className="w-11 h-11 rounded-full border-2 border-primary dark:border-primary2 
                       object-cover cursor-pointer hover:scale-110 transition"
            onClick={() => setShowPhoto(true)}
          />
          <div>
            <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Akkapally Sampath
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Full Stack Web Developer
            </p>
          </div>
        </div>

        {/* CENTER NAV */}
        <nav className="flex flex-wrap justify-center space-x-6 text-base font-medium mt-3 md:mt-0">
          <a href="#projects" className="hover:text-primary dark:hover:text-primary2 transition">Projects</a>
          <a href="#skills" className="hover:text-primary dark:hover:text-primary2 transition">Skills</a>
          <a href="#experience" className="hover:text-primary dark:hover:text-primary2 transition">Experience</a>
          <a href="#contact" className="hover:text-primary dark:hover:text-primary2 transition">Contact</a>
        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3 mt-3 md:mt-0">

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-md 
                       bg-gradient-to-r from-primary to-primary2 text-white shadow-sm 
                       hover:scale-105 transition-transform"
          >
            <Download size={14} /> Resume
          </a>

          {/* CV Button */}
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-md 
                       border border-primary text-primary dark:text-primary2 
                       hover:bg-primary hover:text-white transition-all"
          >
            <Download size={14} /> CV
          </a>

          {/* GitHub (fixed link) */}
          <a
            href="https://github.com/Sampath2910"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary 
                       dark:hover:text-primary2 transition-transform hover:scale-125"
          >
            <Github size={26} strokeWidth={2} />
          </a>

          {/* LinkedIn (fixed link) */}
          <a
            href="https://www.linkedin.com/in/akkapally-sampath-079433292"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary 
                       dark:hover:text-primary2 transition-transform hover:scale-125"
          >
            <Linkedin size={26} strokeWidth={2} />
          </a>

          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 
                       text-gray-800 dark:text-gray-200 transition hover:scale-110 hover:shadow-glow"
            title="Toggle dark mode"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </header>

      {/* FULL PHOTO MODAL */}
      <AnimatePresence>
        {showPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center 
                       justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 150 }}
            >
              <button
                onClick={() => setShowPhoto(false)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white 
                           p-2 rounded-full transition"
              >
                <X size={22} />
              </button>

              <img
                src={profile}
                alt="Full size profile"
                className="max-h-[85vh] rounded-xl shadow-2xl border border-white/30"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
