// src/components/Projects.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

import ecoscan from "../assets/project-ecoscan.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import diabetesImg from "../assets/project-diabetes.png";
import mockInterviewImg from "../assets/project-mockinterview.png";

const projects = [
  {
    id: 1,
    title: "EcoScan — Smart Waste Detection & Reward System",
    description:
      "AI-powered waste classification platform using image recognition.",
    details:
      "EcoScan is an AI-driven web application that classifies waste images and supports smarter recycling decisions using React, Flask, and TensorFlow for real-time predictions.",
    problem:
      "Incorrect waste segregation leads to inefficient recycling and environmental damage.",
    learning:
      "Learned to integrate machine learning models with React frontends, design optimized Flask APIs, and deploy AI-based solutions in real-world production environments.",
    tech: ["React", "TensorFlow.js", "Flask", "MySQL", "Tailwind CSS"],
    image: ecoscan,
    videoKey: "ecoscan",
    live: "https://ecoscan-mgq9.onrender.com",
  },
  {
    id: 2,
    title: "CO₂ Emission Rate Predictor",
    description:
      "Predicts vehicle CO₂ emissions using machine learning.",
    details:
      "A regression-based ML application that estimates vehicle CO₂ emissions and visualizes results through an interactive React interface connected to a Flask backend.",
    problem:
      "Manual emission estimation is time-consuming and error-prone.",
    learning:
      "Strengthened skills in ML regression models, API integration, and presenting analytical insights through interactive data visualizations.",
    tech: ["Python", "Flask", "React", "Chart.js"],
    image: project2,
    videoKey: "co2-emission",
    live: "https://co2-emission-ml-app.onrender.com",
  },
  {
    id: 3,
    title: "House Price Prediction System",
    description:
      "Predicts house prices using ML regression techniques.",
    details:
      "Developed a machine learning system that predicts property prices based on housing features, deployed with a Flask backend and a responsive React frontend.",
    problem:
      "Traditional house price estimation lacks consistency and accuracy.",
    learning:
      "Improved data preprocessing, feature engineering, and deploying predictive ML models using RESTful APIs.",
    tech: ["Python", "Flask", "React", "Scikit-learn", "Tailwind CSS"],
    image: project3,
    videoKey: "houseprice",
    live: "https://house-price-prediction-frontend-w35f.onrender.com",
  },
  {
    id: 4,
    title: "Diabetes Prediction System",
    description:
      "ML-based system for diabetes risk prediction.",
    details:
      "Built a classification-based machine learning application that predicts diabetes risk using medical datasets and provides results through a clean web interface.",
    problem:
      "Early diabetes detection is difficult without predictive tools.",
    learning:
      "Gained experience with classification models, evaluation metrics, and healthcare-focused ML application deployment.",
    tech: ["Python", "Flask", "React", "Machine Learning"],
    image: diabetesImg,
    videoKey: "diabetes-prediction",
    live: "https://diabetics-prediction-ngfp.onrender.com",
  },
  {
    id: 5,
    title: "Smart AI Mock Interview",
    description:
      "AI-powered mock interview platform using NLP.",
    details:
      "An AI-driven mock interview system that evaluates user responses using NLP techniques and provides structured feedback for interview preparation.",
    problem:
      "Students lack access to realistic interview practice platforms.",
    learning:
      "Enhanced NLP similarity scoring, response evaluation logic, and feedback generation for real-time interview assessment systems.",
    tech: ["React", "Python", "Flask", "NLP", "Machine Learning"],
    image: mockInterviewImg,
    videoKey: "mockinterview",
    live: "https://smart-mock-interview-ir4w.onrender.com",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);
  const hoverPause = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    let dir = 1;

    const interval = setInterval(() => {
      if (!el || hoverPause.current) return;
      el.scrollLeft += 2 * dir;
      if (
        el.scrollLeft + el.clientWidth >= el.scrollWidth ||
        el.scrollLeft <= 0
      ) {
        dir *= -1;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () =>
    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollWidth,
      behavior: "smooth",
    });

  return (
    <section id="projects" className="py-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Featured{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#06B6D4]">
          Projects
        </span>
      </h2>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 
                     text-white p-3 rounded-full z-10 shadow-lg"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 
                     text-white p-3 rounded-full z-10 shadow-lg"
        >
          <ChevronRight size={22} />
        </button>

        <div
          ref={scrollRef}
          onMouseEnter={() => (hoverPause.current = true)}
          onMouseLeave={() => (hoverPause.current = false)}
          className="flex gap-8 overflow-x-auto scrollbar-hide"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.05 }}
              className="min-w-[330px] max-w-[350px] bg-gradient-to-br from-gray-900/90 to-gray-800/80 
                         dark:from-white/10 dark:to-gray-900/40 border border-white/10 
                         rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-[#10B981]/20 
                                 text-[#10B981] border border-[#10B981]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
