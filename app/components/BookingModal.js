"use client";

import { useState } from 'react';
import styles from './BookingModal.module.css';

// SVG Icons
const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
);

export default function BookingModal({ car }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropDate, setDropDate] = useState('');
  const [dropTime, setDropTime] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleBook = () => {
    if (!termsAccepted) return;

    // Format the WhatsApp message
    const message = `Hello MY CARS!\n\nI would like to book the *${car.name}*.\n\n*Pickup:* ${pickupDate} at ${pickupTime}\n*Drop-off:* ${dropDate} at ${dropTime}\n\nPlease confirm availability.`;
    
    // Encode for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Direct to WhatsApp
    window.open(`https://wa.me/917560841509?text=${encodedMessage}`, '_blank');
    
    // Close modal
    handleClose();
  };

  return (
    <>
      <button onClick={handleOpen} className={styles.openModalBtn}>
        Book This Vehicle
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={handleClose} aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            <div className={styles.modalHeader} style={{ backgroundImage: `url('${car.image}')` }}>
              <div className={styles.badge}>{car.seats}</div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.carInfo}>
                <div>
                  <h3 className={styles.carTitle}>{car.name}</h3>
                  <span className={styles.carSubtitle}>{car.category} &bull; {car.transmission || "Manual"}</span>
                </div>
                <div className={styles.carPrice}>₹{car.price}</div>
              </div>

              <div className={styles.sectionTitle}>Booking Schedule</div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Pickup Date <span className={styles.required}>*</span></label>
                  <div className={styles.inputWrapper}>
                    <input type="date" className={styles.input} value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
                    {/* Note: Native date pickers usually hide background icons, keeping structure clean */}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Pickup Time <span className={styles.required}>*</span></label>
                  <div className={styles.inputWrapper}>
                    <input type="time" className={styles.input} value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Drop Date <span className={styles.required}>*</span></label>
                  <div className={styles.inputWrapper}>
                    <input type="date" className={styles.input} value={dropDate} onChange={(e) => setDropDate(e.target.value)} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Drop Time <span className={styles.required}>*</span></label>
                  <div className={styles.inputWrapper}>
                    <input type="time" className={styles.input} value={dropTime} onChange={(e) => setDropTime(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className={styles.termsWrapper}>
                <input 
                  type="checkbox" 
                  id="terms" 
                  className={styles.checkbox} 
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label htmlFor="terms" className={styles.termsText}>
                  I agree to the <span className={styles.termsLink}>Terms & Conditions</span> of MY CARS rental service.
                </label>
              </div>

              <button 
                className={styles.submitBtn} 
                onClick={handleBook}
                disabled={!termsAccepted || !pickupDate || !pickupTime || !dropDate || !dropTime}
              >
                <WhatsAppIcon /> Book This Vehicle via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
