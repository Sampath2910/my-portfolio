import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function VideoPlayer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Read query param
  const params = new URLSearchParams(location.search);
  const videoKey = params.get("video");

  /**
   * Cloudinary video URLs (PRODUCTION SAFE)
   */
  const videos = {
    ecoscan:
      "https://res.cloudinary.com/dyymxikuh/video/upload/v1768980153/Ecoscan_Project_1_ijvd2x.mp4",

    "co2-emission":
      "https://res.cloudinary.com/dyymxikuh/video/upload/v1768980109/Co2_Emmission_1_wpfkni.mp4",

    houseprice:
      "https://res.cloudinary.com/dyymxikuh/video/upload/v1768980173/house-PRICE_PREDICTION_f0fkx0.mp4",

    "diabetes-prediction":
      "https://res.cloudinary.com/dyymxikuh/video/upload/v1768975240/diabetics_prediction_idca9g.mp4",

    mockinterview:
      "https://res.cloudinary.com/dyymxikuh/video/upload/v1768980184/Smart_Mock_Interview_mnsp7e.mp4",
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
          preload="metadata"
          className="w-full max-w-5xl rounded-xl shadow-2xl border border-white/10"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}
    </div>
  );
}
