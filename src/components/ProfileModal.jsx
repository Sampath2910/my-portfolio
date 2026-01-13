import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProfileModal({ photo, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative p-4 rounded-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition"
        >
          <X size={20} />
        </button>

        {/* Full Photo */}
        <img
          src={photo}
          alt="Full Profile"
          className="max-h-[85vh] rounded-xl shadow-xl border border-white/20"
        />
      </motion.div>
    </motion.div>
  );
}
