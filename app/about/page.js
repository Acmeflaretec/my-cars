import { company } from '../../data/company';
import styles from './page.module.css';

export const metadata = {
  title: "About Us | MY CARS",
  description: "Learn more about MY CARS.",
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className={styles.headerOverlay}></div>
        <div className="container relative" style={{ zIndex: 10 }}>
          <h1 className="heading-lg">About Us</h1>
          <p className={styles.breadcrumb}>Home &gt; About us</p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutImage}>
            <div className={styles.imgWrapper}>
              <img src="/images/about.jpg" alt="About MY CARS" />
            </div>
          </div>
          
          <div className={styles.aboutContent}>
            <span className={styles.subheading}>About us</span>
            <h2 className="heading-md mb-4">Welcome to MY CARS</h2>
            <div className={styles.textBlocks}>
              <p>Welcome to My Cars, your trusted partner for car rentals in Tirupur. Whether you're a local resident or visiting this vibrant city, we offer a wide range of well-maintained self-drive cars to meet your travel needs. With our affordable car rental services in Tirupur, exploring the city and beyond has never been easier.</p>
              <p>At My Cars, we prioritize customer satisfaction by providing flexible rental plans, top-notch vehicles, and hassle-free booking options. Discover the freedom of driving at your convenience with My Cars – Tirupur's premier self-drive car rental service.</p>
              <p>Experience the best self-drive car rentals in Tirupur, offering a diverse fleet to ensure you find the perfect ride. For car hire in Tirupur, look no further. My Cars is here to make your journey comfortable and convenient with our rental self-drive cars.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
