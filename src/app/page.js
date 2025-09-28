"use client"
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Book } from "./Components/Book";
import { pictures } from "./data";
export default function Page() {
  return (
    <>
      <main>
        <Canvas
          style={{ width: "100vw", height: "100vh" }}
        >
      <ambientLight intensity={1} />
      {/* <directionalLight position={[0 , 0 , 2]} intensity={2} /> */}
      <Book pictures= {pictures} position={[0, 0, 2.5]} />
      <OrbitControls enableZoom enablePan={false} />
      <Environment preset="city"  />
    </Canvas>
      </main>
    </>
  );
}
