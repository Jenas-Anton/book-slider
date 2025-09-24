"use client"
import Experience from "./Components/Experience";
import styles from "./Page.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Book } from "./Components/Book";
import { pictures } from "./data";
export default function Page() {
  return (
    <>
      <div className={styles.background} />

      <main >
          <Canvas
      style={{ width: "100vw", height: "100vh" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Book pictures= {pictures} position={[0, 0, 0]} />
      <OrbitControls enableZoom enablePan={false} />
      <Environment preset="studio" />
    </Canvas>
      </main>
    </>
  );
}
