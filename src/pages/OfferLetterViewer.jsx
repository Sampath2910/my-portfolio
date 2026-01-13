// src/pages/OfferLetterViewer.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function OfferLetterViewer() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const company = params.get("company");

  // map company id -> PDF path (these paths must exist in src/assets/experience/)
  const pdfMap = {
    hexart: "/src/assets/experience/hexart.pdf",
    coincent: "/src/assets/experience/coincent1.pdf",
  };

  const pdfSrc = pdfMap[company] || null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <h1 className="text-2xl font-semibold mb-3">
          {company ? `${company.toUpperCase()} — Offer Letter` : "Offer Letter"}
        </h1>

        {pdfSrc ? (
          <div className="border rounded overflow-hidden">
            <iframe
              title="Offer Letter"
              src={pdfSrc}
              className="w-full h-[80vh] bg-white"
            />
          </div>
        ) : (
          <div className="p-6 bg-white dark:bg-gray-800 rounded text-center">
            Offer letter not found for "{company}".
          </div>
        )}

        {pdfSrc && (
          <div className="mt-3 flex gap-2">
            <a
              href={pdfSrc}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white"
            >
              Open in new tab
            </a>
            <a
              href={pdfSrc}
              download
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700"
            >
              Download PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
