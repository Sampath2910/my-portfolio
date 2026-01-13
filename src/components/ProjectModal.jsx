// src/components/ProjectModal.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Play, ExternalLink } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl 
                   max-w-3xl w-full p-8 relative overflow-y-auto max-h-[90vh]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full 
                     hover:bg-gray-200 dark:hover:bg-gray-800"
          title="Press ESC to close"
        >
          <X size={20} />
        </button>

        {/* IMAGE — fully visible */}
        <div className="mb-6 rounded-xl overflow-hidden border dark:border-gray-700">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-[340px] object-contain bg-white dark:bg-gray-900"
          />
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold mb-4 
          bg-gradient-to-r from-[#10B981] to-[#06B6D4] 
          bg-clip-text text-transparent">
          {project.title}
        </h2>

        {/* DETAILS */}
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {project.details}
        </p>

        {/* PROBLEM */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <strong className="text-gray-900 dark:text-gray-100">Problem:</strong>{" "}
          {project.problem}
        </p>

        {/* LEARNED – improved spacing */}
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          <strong className="text-gray-900 dark:text-gray-100">
            What I Learned:
          </strong>{" "}
          {project.learning}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full 
                         bg-[#10B981]/10 text-[#10B981]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-4">
          {project.videoKey && (
            <a
              href={`/watch?video=${project.videoKey}`}
              className="flex items-center gap-2 px-5 py-2 rounded-md 
                         bg-gradient-to-r from-[#10B981] to-[#06B6D4] 
                         text-white hover:scale-105 transition"
            >
              <Play size={16} /> Watch Video
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-md 
                         border border-[#10B981] text-[#10B981] 
                         hover:bg-[#10B981] hover:text-white transition"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
