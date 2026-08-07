import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Oops! Wrong Turn</h1>
        <p className={styles.description}>
          We couldn&apos;t find the page you were looking for. It might have been removed, renamed, or temporarily unavailable.
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/" className={styles.btnPrimary}>
            Return Home
          </Link>
          <Link href="/cars" className={styles.btnSecondary}>
            Browse Cars
          </Link>
        </div>
      </div>
    </div>
  );
}
