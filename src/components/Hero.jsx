import React from "react";
import { motion } from "framer-motion";
import Globe from "./Globe";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center py-24 md:py-32">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-left"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
  Building scalable, user-focused web applications with{" "}
  <span className="glow-text">React & Flask</span>.
</h1>



        <p className="mt-5 text-gray-700 dark:text-gray-300 max-w-xl">
          Final-year B.Tech student passionate about ML and web systems. I build
          performant frontends, reliable backends, and integrate machine
          learning into products.
        </p>

        <div className="mt-8 flex gap-3">
          <a
            href="#projects"
            className="px-5 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-white dark:border-primary2 dark:text-primary2 dark:hover:bg-primary2 dark:hover:text-black transition"
          >
            See projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-md bg-gradient-to-r from-primary to-primary2 text-white dark:text-black font-medium shadow-glow transition hover:scale-105"
          >
            Let’s collaborate
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <Globe />
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[
            { value: "5+", label: "Projects" },
            { value: "2", label: "Internships" },
            { value: "AI & Data", label: "Projects" },
          ].map((metric, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10 backdrop-blur-md text-center shadow-soft"
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {metric.value}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
