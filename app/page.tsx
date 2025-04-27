import styles from "./page.module.css";
import Nav from "@/components/custom/Nav";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Nav />
      </main>
    </div>
  );
}
