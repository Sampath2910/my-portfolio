// src/components/ExperienceModal.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ExperienceModal({ experience, onClose }) {
  const [showExtras, setShowExtras] = useState(false);
  const [activeExtraIndex, setActiveExtraIndex] = useState(0);
  const scrollRef = useRef(null);

  // ✅ ESC KEY CLOSE
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    setActiveExtraIndex(0);
  }, [experience]);

  const openPdf = (pdfUrl) => {
    if (!pdfUrl) return;
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900 rounded-xl shadow-xl max-w-4xl w-full p-6 relative"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-1">
          {experience.role} — {experience.company}
        </h2>
        <p className="text-xs text-gray-400 mb-4">{experience.duration}</p>

        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
          {experience.details}
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* LEFT */}
          <div>
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <img
                src={experience.mainCertificate}
                alt="certificate"
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => openPdf(experience.offerPdf)}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-[#10B981] to-[#06B6D4]
                           text-black text-sm font-medium hover:scale-105 transition"
              >
                Offer letter (open)
              </button>

              <button
                onClick={() => setShowExtras(!showExtras)}
                className="px-4 py-2 rounded-md border border-gray-600 text-sm hover:bg-gray-800 transition"
              >
                {showExtras ? "Hide certificates" : "More certificates"}
              </button>
            </div>
          </div>

          {/* RIGHT – IMPROVED CONTENT */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#10B981]">
              What I learned
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              During this internship, I gained strong practical experience in
              deploying machine learning models into production-ready Flask
              applications. I worked extensively on optimizing REST APIs,
              reducing inference latency, and improving backend reliability.
              <br /><br />
              I also learned how to design scalable backend architectures,
              handle real-time data efficiently, and integrate AI workflows with
              modern frontend systems. This experience strengthened my
              understanding of real-world ML deployment, debugging production
              issues, and writing clean, maintainable backend code.
            </p>
          </div>
        </div>

        {/* EXTRA CERTIFICATES */}
        {showExtras && (
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Other certificates</h4>

            <div className="flex gap-4">
              <div
                ref={scrollRef}
                className="flex flex-col gap-2 max-h-56 overflow-y-auto"
              >
                {experience.extras.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setActiveExtraIndex(i)}
                    className={`w-24 h-16 object-cover rounded cursor-pointer border-2
                      ${i === activeExtraIndex ? "border-[#10B981]" : "border-transparent"}`}
                  />
                ))}
              </div>

              <div className="flex-1 rounded-lg overflow-hidden border border-gray-700">
                <img
                  src={experience.extras[activeExtraIndex]}
                  className="w-full h-64 object-contain bg-white"
                />
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
