import { cars } from '../../data/cars';
import styles from './page.module.css';
import pageStyles from '../page.module.css';
import CarCard from '../components/CarCard';

export const metadata = {
  title: "Our Cars | MY CARS Tirupur",
  description: "Browse our extensive fleet of self-drive hatchbacks, sedans, SUVs, and MPVs available for rent in Tirupur.",
};

export default function CarsPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className={styles.headerOverlay}></div>
        <div className="container relative" style={{ zIndex: 10 }}>
          <h1 className="heading-lg">Choose Your Car</h1>
          <p className={styles.breadcrumb}>Home &gt; Cars</p>
        </div>
      </section>

      <section className={styles.carsSection}>
        <div className="container">
          <div className={styles.filterBar}>
            <p>Showing all {cars.length} cars</p>
          </div>

          <div className="grid-cards">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
