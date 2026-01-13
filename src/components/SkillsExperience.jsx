import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceModal from "./ExperienceModal";

import hexartLetterImg from "../assets/experience/hexart-letter.jpg";
import hexartCert from "../assets/experience/hexart-certificate.jpg";
import hexartExtra1 from "../assets/experience/hexart-extra1.jpg";
import hexartExtra2 from "../assets/experience/hexart-extra2.jpg";
import hexartExtra3 from "../assets/experience/hexart-extra3.jpg";
import hexartPdf from "../assets/experience/hexart.pdf";

import coincentCert from "../assets/experience/coincent-certificate.jpg";
import coincentExtra1 from "../assets/experience/coincent-extra1.jpg";
import coincentExtra2 from "../assets/experience/coincent-extra2.jpg";
import coincentExtra3 from "../assets/experience/coincent-extra3.jpg";
import coincentPdf from "../assets/experience/coincent1.pdf";

const experiences = [
  {
    id: 1,
    role: "AI Intern",
    company: "Hexart.in",
    duration: "Jan 2025 – Present",
    details:
      "Contributed to AI model integration and Flask API optimization. Improved inference latency and helped design intelligent backend systems.",
    learning:
      "Learned how to deploy AI models into scalable Flask applications and improve database performance for real-time use.",
    offerPdf: hexartPdf,
    mainCertificate: hexartCert,
    letters: [hexartLetterImg],
    extras: [hexartExtra1, hexartExtra2, hexartExtra3],
  },
  {
    id: 2,
    role: "Data Science Intern",
    company: "Coincent",
    duration: "Sep 2023 – Dec 2023",
    details:
      "Analyzed real-world datasets, built data pipelines, and visualized insights using SQL and Python. Assisted in report generation for analytics clients.",
    learning:
      "Gained hands-on experience in feature engineering, model evaluation, and improving data quality in business contexts.",
    offerPdf: coincentPdf,
    mainCertificate: coincentCert,
    letters: [],
    extras: [coincentExtra1, coincentExtra2, coincentExtra3],
  },
];

/* EXPERIENCE SECTION */
export function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 
        text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#06B6D4]">
        Work Experience
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="p-6 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200
                       dark:from-gray-900/90 dark:to-gray-800/80 backdrop-blur-md
                       border border-gray-300 dark:border-white/10 hover:shadow-glow 
                       transition-all flex flex-col h-full"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
              <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
              <p className="text-xs text-gray-700 dark:text-gray-500">{exp.duration}</p>
              <p className="text-sm text-gray-800 dark:text-gray-300">{exp.details}</p>

              <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-[#10B981]">Learned:</span> {exp.learning}
              </p>
            </div>

            <button
              onClick={() => setSelectedExp(exp)}
              className="mt-auto px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r
                         from-[#10B981] to-[#06B6D4] text-black shadow hover:scale-105 
                         transition w-fit"
            >
              Explore
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedExp && (
          <ExperienceModal experience={selectedExp} onClose={() => setSelectedExp(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

/* SKILLS SECTION */
export default function SkillsExperience() {
  const skillGroups = [
    { title: "Languages", items: ["Python", "Java", "JavaScript (ES6+)", "HTML & CSS"] },
    { title: "Frameworks & ML", items: ["React", "Flask / Django", "TensorFlow / Scikit-learn", "Tailwind CSS"] },
    { title: "Databases", items: ["MySQL", "SQLite", "SQL / Query Optimization"] },
    { title: "Tools", items: ["Git & GitHub", "Docker (basic)", "VS Code", "CI / CD concepts"] },
  ];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 
        text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#06B6D4]">
        Skills
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            whileHover={{ scale: 1.04 }}
            className="p-6 rounded-xl border shadow-lg
                       bg-gradient-to-br from-gray-100 to-gray-200
                       dark:from-gray-900/80 dark:to-gray-800/60
                       text-gray-900 dark:text-gray-100"
          >
            <h4 className="text-xl font-semibold mb-3">{group.title}</h4>
            <ul className="space-y-2 text-sm">
              {group.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#10B981] font-bold">•</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-12 p-6 rounded-xl border shadow-md text-center
                   bg-gradient-to-r from-gray-100 to-gray-200
                   dark:from-[#10B981]/10 dark:to-[#06B6D4]/10
                   text-gray-900 dark:text-gray-200"
      >
        <p className="text-lg leading-relaxed">
          I enjoy building full-stack systems that combine robust backends with 
          performant frontends and practical ML integrations.
        </p>
      </motion.div>
    </section>
  );
}
