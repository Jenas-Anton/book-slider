"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import {Book}  from "./Book";

export default function Experience() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 0, 3], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Book position={[0, 0, 0]} />
      <OrbitControls enableZoom enablePan={false} />
      <Environment preset="studio" />
    </Canvas>
  );
}
