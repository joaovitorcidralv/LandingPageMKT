import Header from "@/components/header";
import styles from "./Home.module.scss";
import Welcome from "@/components/welcome";
import Features from "@/components/features";

export default function Home() {
  return (
    <div className={styles.container}>
    <Header />
    <Welcome />
    <Features />
  </div>
  );
}
