"use client"
import Experience from "./Components/Experience";
import { UI } from "./Components/UI";
import styles from "./Page.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.background} />

      <main >
        {/* <UI /> commented */}
        <UI/>
        <Experience />
      </main>
    </>
  );
}
