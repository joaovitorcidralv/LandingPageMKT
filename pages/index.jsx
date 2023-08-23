import Header from "@/components/header";
import styles from "./Home.module.scss";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <div className={styles.container}>
    <Header />
    <Welcome />
  </div>
  );
}
