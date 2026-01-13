// src/components/CertificatesViewer.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function CertificatesViewer({ images = [], onClose }) {
  const [zoomSrc, setZoomSrc] = useState(null);

  return (
    <>
      {/* background overlay */}
      <motion.div
        className="fixed inset-0 bg-black/60 z-60 flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Close certificates"
          >
            <X size={18} />
          </button>

          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            Certificates
          </h4>

          <div className="max-h-[60vh] overflow-y-scroll space-y-4 pr-2">
            {images.length === 0 && (
              <div className="p-6 text-center text-gray-600 dark:text-gray-400">
                No additional certificates available.
              </div>
            )}

            {images.map((img, idx) => (
              <motion.div
                key={idx}
                className="rounded-md overflow-hidden border"
                whileHover={{ scale: 1.01 }}
              >
                <img
                  src={img}
                  alt={`certificate-${idx + 1}`}
                  className="w-full object-contain cursor-zoom-in"
                  onClick={() => setZoomSrc(img)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Zoom overlay */}
      {zoomSrc && (
        <div className="fixed inset-0 z-70 bg-black/85 flex items-center justify-center p-4">
          <button
            onClick={() => setZoomSrc(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20"
            aria-label="Close zoom"
          >
            <X size={20} />
          </button>

          <img
            src={zoomSrc}
            alt="zoom"
            className="max-w-[95%] max-h-[90%] object-contain rounded-md shadow-lg"
          />
        </div>
      )}
    </>
  );
}
