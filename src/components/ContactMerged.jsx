// src/components/ContactMerged.jsx
import React, { useState } from "react";
import { Send, Linkedin, Mail, Github } from "lucide-react";

export default function ContactMerged() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const linkedIn =
    "https://www.linkedin.com/in/akkapally-sampath-079433292?utm_source=share_via&utm_content=profile&utm_medium=member_android";
  const github = "https://github.com/sampathchintu";
  const email = "akkapallysampath12@gmail.com";

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // placeholder: replace with your actual contact API
    setTimeout(() => {
      setLoading(false);
      alert("Thanks — message sent (demo). Replace with real API.");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#06B6D4]">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
        {/* left: contact info */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/70 border border-white/5 shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-white">Say hi 👋</h3>
          <p className="text-gray-300 mb-5">
            Open to internships, freelance work, and collaborations. You can reach me via email, GitHub or LinkedIn.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gray-300" />
              <a href={`mailto:${email}`} className="text-gray-200 hover:underline">
                {email}
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Github size={18} className="text-gray-300" />
              <a href={github} target="_blank" rel="noreferrer" className="text-gray-200 hover:underline">
                github.com/sampathchintu
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Linkedin size={18} className="text-gray-300" />
              <a href={linkedIn} target="_blank" rel="noreferrer" className="text-gray-200 hover:underline">
                LinkedIn profile
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <p className="text-sm text-gray-400">Resume & CV</p>
            <div className="flex gap-3 mt-3">
              <a href="/resume.pdf" download className="px-4 py-2 rounded-md bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-black font-medium">
                Download Resume
              </a>
              <a href="/cv.pdf" download className="px-4 py-2 rounded-md border border-white/10 text-white">
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* right: contact form */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-gray-700/5 border border-white/5 shadow-lg">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                className="w-full px-3 py-2 rounded-md bg-transparent border border-white/10 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-md bg-transparent border border-white/10 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about the opportunity"
                rows={6}
                className="w-full px-3 py-2 rounded-md bg-transparent border border-white/10 text-white"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-black font-medium hover:scale-105 transition"
              >
                <Send size={16} /> {loading ? "Sending..." : "Send"}
              </button>

              <div className="text-sm text-gray-400">Or email directly</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
