// src/pages/Watch.jsx
import { useSearchParams } from "react-router-dom";

export default function Watch() {
  const [params] = useSearchParams();
  const video = params.get("video");

  if (!video) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Video not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <video
        src={`/videos/${video}.mp4`}
        controls
        autoPlay
        className="max-w-5xl w-full rounded-lg shadow-2xl"
      />
    </div>
  );
}
