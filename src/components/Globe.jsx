import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function RotatingGlobe({ isDark }) {
  const globeRef = useRef();
  const glowRef = useRef();

  // Smooth rotation animation
  useFrame(() => {
    globeRef.current.rotation.y += 0.003;
    glowRef.current.rotation.y += 0.002;
  });

  // Change glow color based on dark/light mode
  const glowColor = isDark ? "#10B981" : "#06B6D4";
  const baseColor = isDark ? "#0f172a" : "#cfeffd";

  return (
    <group>
      {/* Main globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color={baseColor}
          metalness={0.5}
          roughness={0.5}
          emissive={glowColor}
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Glowing atmosphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <meshBasicMaterial
          color={glowColor}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

export default function Globe() {
  const [isDark, setIsDark] = React.useState(
    document.documentElement.classList.contains("dark")
  );

  // React to theme changes instantly
  useEffect(() => {
    const observer = new MutationObserver(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    );
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-80 md:h-[400px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 3]} intensity={1.2} />
        <RotatingGlobe isDark={isDark} />
        <Stars radius={50} depth={30} count={4000} factor={3} fade />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
