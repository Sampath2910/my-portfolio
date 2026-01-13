// src/components/ExperienceSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceModal from "./ExperienceModal";

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
      "Worked on AI model integration, backend optimization, and real-time performance improvements.",
    learning:
      "Learned how to deploy AI models into scalable Flask applications and improve database performance for real-time usage.",
    offerPdf: hexartPdf,
    mainCertificate: hexartCert,
    extras: [hexartExtra1, hexartExtra2, hexartExtra3],
  },
  {
    id: 2,
    role: "Data Science Intern",
    company: "Coincent",
    duration: "Sep 2023 – Dec 2023",
    details:
      "Worked on real datasets, feature engineering, automation, and analytics dashboards.",
    learning:
      "Gained hands-on experience in feature engineering, model evaluation, and industry-level data analysis workflows.",
    offerPdf: coincentPdf,
    mainCertificate: coincentCert,
    extras: [coincentExtra1, coincentExtra2, coincentExtra3],
  },
];

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#06B6D4]">
          Work Experience
        </span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-800/80
                       backdrop-blur-md border border-white/10
                       flex flex-col h-full"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-xs">{exp.duration}</p>

              <p className="text-sm opacity-80">{exp.details}</p>

              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-semibold text-[#10B981]">Learned:</span>{" "}
                {exp.learning}
              </p>
            </div>

            {/* ✅ CLEAR GAP FIX */}
            <button
              onClick={() => setSelectedExp(exp)}
              className="mt-8 px-4 py-2 text-sm font-medium rounded-md
                         bg-gradient-to-r from-[#10B981] to-[#06B6D4]
                         text-black shadow hover:scale-105 transition w-fit"
            >
              Explore
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedExp && (
          <ExperienceModal
            experience={selectedExp}
            onClose={() => setSelectedExp(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
