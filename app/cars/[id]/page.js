import { cars } from '../../../data/cars';
import styles from './page.module.css';
import BookingModal from '../../components/BookingModal';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);
  if (!car) {
    return { title: 'Car Not Found' };
  }
  return {
    title: `${car.name} Rental in Tirupur`,
    description: `Rent ${car.name} in Tirupur. ${car.seats}, ${car.transmission}, ${car.fuel}. Book now via WhatsApp!`,
  };
}

// Icons
const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

const WarningIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
);

const FuelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8"/><path d="M7 12V8a4 4 0 0 1 8 0v4"/><path d="M11 22v-4"/><path d="M15 22v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/><path d="M19 12V8a4 4 0 0 0-8 0"/></svg>
);

const TransmissionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="8" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="16"/><line x1="8" y1="12" x2="2" y2="12"/><line x1="22" y1="12" x2="16" y2="12"/></svg>
);

const SeatsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export default async function CarDetailsPage({ params }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);
  
  if (!car) {
    notFound();
  }

  // Generate 3 mock thumbnails to match screenshot exactly (we'll just use the main image 3 times for now)
  const thumbnails = [car.image, car.image, car.image];

  return (
    <div className="container" style={{ paddingBottom: '40px' }}>
      <div style={{ paddingTop: '20px' }}>
        <Link href="/cars" style={{ display: 'inline-flex', padding: '10px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '50%', color: '#111827' }} aria-label="Go back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        </Link>
      </div>

      <div className={styles.detailContainer}>
        {/* Left Image Section */}
        <div className={styles.imageSection}>
          <div className={styles.mainImageWrapper}>
            <div className={styles.badge}>{car.seats}</div>
            <img src={car.image} alt={car.name} className={styles.mainImage} />
          </div>
          <div className={styles.thumbnails}>
            {thumbnails.map((thumb, idx) => (
              <div key={idx} className={`${styles.thumbWrapper} ${idx === 0 ? styles.active : ''}`}>
                <img src={thumb} alt={`Thumbnail ${idx + 1}`} className={styles.thumbImage} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Info Section */}
        <div className={styles.infoSection}>
          <div className={styles.locationTag}>
            <LocationIcon /> TIRUPUR
          </div>
          <h1 className={styles.title}>{car.name}</h1>
          <h2 className={styles.subtitle}>{car.transmission || "Manual"}</h2>
          
          <div className={styles.disclaimer}>
            <div className={styles.disclaimerIcon}><WarningIcon /></div>
            <span>{car.disclaimer || "Kindly note that fuel and toll charges are to be covered separately by the Customer."}</span>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureBox}>
              <div className={styles.featureLabel}>FUEL</div>
              <div className={styles.featureIcon}><FuelIcon /></div>
              <div className={styles.featureValue}>{car.fuel || "Petrol"}</div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureLabel}>TRANSMISSION</div>
              <div className={styles.featureIcon}><TransmissionIcon /></div>
              <div className={styles.featureValue}>{car.transmission || "Manual"}</div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureLabel}>CAPACITY</div>
              <div className={styles.featureIcon}><SeatsIcon /></div>
              <div className={styles.featureValue}>{car.seats || "5 Seats"}</div>
            </div>
          </div>

          <div className={styles.pricingCard}>
            <span className={styles.priceLabel}>Rental Price</span>
            <div className={styles.pricingHeader}>
              <div className={styles.priceAmount}>₹{car.price}</div>
              <div className={styles.priceDuration}>24 hrs/300 kms</div>
            </div>

            <div className={styles.usageDisclaimer}>
              <div className={styles.usageHeader}>
                <WarningIcon /> Usage Disclaimer
              </div>
              <div className={styles.usageItem}>Additional Hours: {car.extraHours || "₹300 per hour"}</div>
              <div className={styles.usageItem}>Additional Distance: {car.extraKm || "₹10 per km"}</div>
            </div>

            {/* This button will open the Booking Modal (Client Component) */}
            <BookingModal car={car} />
          </div>
        </div>
      </div>
    </div>
  );
}
