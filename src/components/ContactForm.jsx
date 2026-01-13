import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github } from "lucide-react";

const EMAILJS_SERVICE = "service_e768xim";
const EMAILJS_TEMPLATE = "__ejs-test-mail-service__";
const EMAILJS_KEY = "4QQpDxuwOU_VI8iS0";

export default function ContactForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    const params = {
      from_name: nameRef.current.value,
      from_email: emailRef.current.value,
      message: msgRef.current.value,
      to_email: "akkapallysampath12@gmail.com"
    };

    try {
      emailjs.init(EMAILJS_KEY);
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, params);
      setStatus({ ok: true, text: "Message sent — thank you!" });
      nameRef.current.value = "";
      emailRef.current.value = "";
      msgRef.current.value = "";
    } catch (err) {
      console.error("EmailJS err", err);
      setStatus({ ok: false, text: "Failed to send — try again or email directly." });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-12">
      <h3 className="text-2xl font-semibold text-white">Contact</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-900/50 rounded">
          <h4 className="font-medium text-white">Say hi 👋</h4>
          <p className="text-gray-300 mt-2">Open to internships, freelance work, and collaborations.</p>
          <div className="mt-4 text-sm text-gray-300">
            <div className="flex items-center gap-2"><Mail size={16} /> <a href="mailto:akkapallysampath12@gmail.com" className="underline">akkapallysampath12@gmail.com</a></div>
            <div className="flex items-center gap-2 mt-2"><Github size={16} /> <a href="https://github.com/sampathchintu" className="underline">github.com/sampathchintu</a></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 bg-gray-900/60 rounded">
          <label className="block text-sm text-gray-200">Name
            <input ref={nameRef} required className="mt-1 w-full p-2 rounded bg-black/30 border border-white/10" placeholder="Your name" />
          </label>

          <label className="block text-sm text-gray-200 mt-3">Email
            <input ref={emailRef} required type="email" className="mt-1 w-full p-2 rounded bg-black/30 border border-white/10" placeholder="you@example.com" />
          </label>

          <label className="block text-sm text-gray-200 mt-3">Message
            <textarea ref={msgRef} required rows={5} className="mt-1 w-full p-2 rounded bg-black/30 border border-white/10" placeholder="Tell me about the opportunity" />
          </label>

          <div className="mt-4 flex items-center justify-between">
            <button type="submit" disabled={sending} className="px-4 py-2 rounded bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-black font-medium">{sending ? "Sending..." : "Send"}</button>
            <small className="text-xs text-gray-400">Or email directly</small>
          </div>

          {status && <div className={`mt-3 text-sm ${status.ok ? "text-green-400" : "text-red-400"}`}>{status.text}</div>}
        </form>
      </div>
    </section>
  );
}
