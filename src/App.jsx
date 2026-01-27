// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsExperience, { ExperienceSection } from "./components/SkillsExperience";
import ContactMerged from "./components/ContactMerged";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

// pages
import VideoPlayer from "./pages/VideoPlayer";
import OfferLetterViewer from "./pages/OfferLetterViewer";

export default function App() {
  // Parallax background movement (subtle)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 6;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100
                  dark:from-[#020617] dark:via-[#030712] dark:to-black
                  text-gray-900 dark:text-gray-100 transition-all duration-700 ease-in-out
                  bg-[length:120%_120%]"
    >
      {/* header + particles always visible */}
      <Header />
      <ParticlesBackground />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <main className="pt-24 max-w-7xl mx-auto px-6">
              <Hero />

              {/* --- EXPERIENCE (big banner like screenshot 1) --- */}
              <ExperienceSection />

              {/* --- PROJECTS --- */}
              <Projects />

              {/* --- SKILLS --- */}
              <SkillsExperience />

              {/* --- CONTACT (merged) --- */}
              <ContactMerged />

              <Footer />
            </main>
          }
        />

        {/* VIDEO PLAYER */}
        <Route path="/watch" element={<VideoPlayer />} />

        {/* Offer letter viewer (PDF) */}
        <Route path="/offer" element={<OfferLetterViewer />} />
      </Routes>
    </div>
  );
}
