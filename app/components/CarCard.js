import Link from 'next/link';
import styles from './CarCard.module.css';

export default function CarCard({ car }) {
  // SVGs for the features
  const FuelIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8"/><path d="M7 12V8a4 4 0 0 1 8 0v4"/><path d="M11 22v-4"/><path d="M15 22v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/><path d="M19 12V8a4 4 0 0 0-8 0"/></svg>
  );

  const TransmissionIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="8" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="16"/><line x1="8" y1="12" x2="2" y2="12"/><line x1="22" y1="12" x2="16" y2="12"/></svg>
  );

  const SeatsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );

  const WarningIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
  );

  const HeartIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
  );

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper} style={{ backgroundImage: `url('${car.image}')` }} role="img" aria-label={`Image of ${car.name}`}>
        <div className={styles.badge}>{car.seats}</div>
        <div className={styles.heart}>
          <HeartIcon />
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h3 className={styles.title}>{car.name}</h3>
          <span className={styles.price}>₹{car.price}</span>
        </div>
        
        <div className={styles.subHeaderRow}>
          <span className={styles.subtitle}>{car.transmission}</span>
          <span className={styles.subtitle}>24 HRS/300 KMS</span>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><FuelIcon /></div>
            <span className={styles.featureText}>{car.fuel || "Petrol"}</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><TransmissionIcon /></div>
            <span className={styles.featureText}>{car.transmission || "Manual"}</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><SeatsIcon /></div>
            <span className={styles.featureText}>{car.seats || "5 Seats"}</span>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <div className={styles.disclaimerIcon}><WarningIcon /></div>
          <span>{car.disclaimer || "Kindly note that fuel and toll charges are to be covered separately by the Customer."}</span>
        </div>

        <Link href={`/cars/${car.id}`} className={styles.viewBtn}>
          View Details 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </div>
    </div>
  );
}
