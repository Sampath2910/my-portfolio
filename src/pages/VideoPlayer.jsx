import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function VideoPlayer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Read query param
  const params = new URLSearchParams(location.search);
  const videoKey = params.get("video");

  /**
   * IMPORTANT:
   * These paths MUST match files inside public/videos/
   */
  const videos = {
    ecoscan: "/videos/ecoscan.mp4",
    "co2-emission": "/videos/co2-emission.mp4",
    houseprice: "/videos/houseprice.mp4",
    "diabetes-prediction": "/videos/diabetes-prediction.mp4",
    mockinterview: "/videos/mockinterview.mp4",
  };

  const videoSrc = videos[videoKey];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-10">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-6 px-4 py-2 rounded-md 
                   bg-gray-800 text-white hover:bg-gray-700 transition"
      >
        ⬅ Back
      </button>

      {/* Title */}
      <h1 className="text-white text-2xl md:text-3xl font-semibold mb-6 text-center">
        Project Demo Video
      </h1>

      {/* Error handling */}
      {!videoSrc ? (
        <p className="text-red-400 text-lg">
          ❌ Video not found. Please go back and try again.
        </p>
      ) : (
        <video
          controls
          autoPlay
          playsInline
          className="w-full max-w-4xl rounded-xl shadow-2xl border border-white/10"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}
    </div>
  );
}
