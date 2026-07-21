import Link from 'next/link';
import { cars } from '../data/cars';
import styles from './page.module.css';
import CarCard from './components/CarCard';
import HeroCarousel from './components/HeroCarousel';

export default function Home() {
  // Use all cars or a subset? In the original index.html, it showed a carousel with all cars.
  const featuredCars = cars;

  return (
    <>
      <HeroCarousel />

      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="heading-md">Better Way to Rent Your Perfect Cars</h2>
          </div>
          
          <div className={styles.servicesGrid}>
            {[
              { title: "Choose Your Pickup Location", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> },
              { title: "Select the Best Deal", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.4 14.4 9.6 9.6M2.5 13.5l5.5-5.5a2.12 2.12 0 0 1 3 0L15.5 12l2 2a2.12 2.12 0 0 1 0 3l-1.5 1.5a2.12 2.12 0 0 1-3 0L8.5 14l-2-2a2.12 2.12 0 0 1 0-3zM21.5 10.5l-5.5 5.5a2.12 2.12 0 0 1-3 0L8.5 12l-2-2a2.12 2.12 0 0 1 0-3l1.5-1.5a2.12 2.12 0 0 1 3 0L15.5 10l2 2a2.12 2.12 0 0 1 0 3z"></path></svg> },
              { title: "Reserve Your Rental Car", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg> },
              { title: "Enjoy Your Drive", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H9.3a2 2 0 0 0-1.6.8L5 11l-5.16.86a1 1 0 0 0-.84.99V16h3m14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path></svg> }
            ].map((service, index) => (
              <div key={index} className={`glass-panel ${styles.serviceCard}`}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subheading}>What we offer</span>
            <h2 className="heading-md">Featured Vehicles</h2>
          </div>

          <div className="grid-cards">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.aboutSectionPreview}>
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutImage} role="img" aria-label="About MY CARS">
          </div>
          <div className={styles.aboutContent}>
            <span className={styles.subheading}>About us</span>
            <h2 className="heading-md mb-4">Welcome to MY CARS</h2>
            <div className={styles.textBlocks}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>Welcome to My Cars, your trusted partner for car rentals in Tirupur. Whether you're a local resident or visiting this vibrant city, we offer a wide range of well-maintained self-drive cars to meet your travel needs. With our affordable car rental services in Tirupur, exploring the city and beyond has never been easier.</p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>At My Cars, we prioritize customer satisfaction by providing flexible rental plans, top-notch vehicles, and hassle-free booking options. Discover the freedom of driving at your convenience with My Cars – Tirupur's premier self-drive car rental service.</p>
              <p style={{ color: 'var(--text-secondary)' }}>Experience the best self-drive car rentals in Tirupur, offering a diverse fleet to ensure you find the perfect ride. For car hire in Tirupur, look no further. My Cars is here to make your journey comfortable and convenient with our rental self-drive cars.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subheading}>Services</span>
            <h2 className="heading-md">Our Latest Services</h2>
          </div>
          
          <div className={styles.servicesGrid}>
            {[
              { title: "Wedding Ceremony", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> },
              { title: "City Transfer", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg> },
              { title: "Airport Transfer", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.2 3.6 7.6 4.4-4 4-2.8-.7c-.4-.1-.8.2-1 .6l-.7 2 4.4 1.5 1.5 4.4 2-.7c.4-.2.7-.6.6-1l-.7-2.8 4-4 4.4 7.6 3.6-1.2c.5-.2.8-.6.7-1.1z"></path></svg> },
              { title: "Whole City Tour", icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg> }
            ].map((service, index) => (
              <div key={index} className={`glass-panel ${styles.serviceCard}`}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          <div className={styles.statItem}>
            <strong>6</strong>
            <span>Year<br/>Experienced</span>
          </div>
          <div className={styles.statItem}>
            <strong>20</strong>
            <span>Total<br/>Cars</span>
          </div>
          <div className={styles.statItem}>
            <strong>5000</strong>
            <span>Happy<br/>Customers</span>
          </div>
          <div className={styles.statItem}>
            <strong>2</strong>
            <span>Total<br/>Branches</span>
          </div>
        </div>
      </section>
    </>
  );
}
