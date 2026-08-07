"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cars } from '../../data/cars';
import styles from './HeroCarousel.module.css';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Pick premium looking cars for the hero
  const heroCars = cars.filter(c => c.image).slice(0, 5);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % heroCars.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + heroCars.length) % heroCars.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [heroCars.length, isAnimating]);

  if (!heroCars.length) return null;

  const currentCar = heroCars[currentIndex];

  return (
    <div className={styles.heroWrapper}>
      <div className={`container ${styles.splitContainer}`}>
        
        {/* Left Side: Typography & CTA */}
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Premium Self-Drive Rentals
          </div>
          <h1 className={styles.title}>
            Self Driving Cars <br />
            <span className={styles.highlight}>in Thirupur</span>
          </h1>
          <p className={styles.subtitle}>
            Experience the freedom of the open road with our exclusive fleet of well-maintained cars. Flexible rentals, affordable prices, and unmatched service in Tirupur.
          </p>
          
          <div className={styles.actionGroup}>
            <Link href="/cars" className={styles.primaryBtn}>
              Explore Fleet
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
            <Link href="/about" className={styles.secondaryBtn}>
              How it works
            </Link>
          </div>
          
          <div className={styles.trustSignals}>
            <div className={styles.trustItem}>
              <strong className={styles.trustNumber}>5k+</strong>
              <span className={styles.trustLabel}>Happy<br/>Customers</span>
            </div>
            <div className={styles.trustDivider}></div>
            <div className={styles.trustItem}>
              <strong className={styles.trustNumber}>20+</strong>
              <span className={styles.trustLabel}>Premium<br/>Vehicles</span>
            </div>
          </div>
        </div>

        {/* Right Side: Floating Carousel */}
        <div className={styles.visualContent}>
          <div className={styles.backdropShape}></div>
          
          <div className={styles.carouselStage}>
            {heroCars.map((car, index) => {
              let slideClass = styles.slide;
              if (index === currentIndex) slideClass += ` ${styles.active}`;
              else if (index === (currentIndex - 1 + heroCars.length) % heroCars.length) slideClass += ` ${styles.prev}`;
              else slideClass += ` ${styles.next}`;

              return (
                <div key={car.id} className={slideClass}>
                  <div className={styles.carImageContainer}>
                    <img src={car.image} alt={car.name} className={styles.carImage} />
                  </div>
                  
                  {/* Floating Price Tag */}
                  <div className={`${styles.floatingCard} ${index === currentIndex ? styles.showCard : ''}`}>
                    <div className={styles.cardHeader}>
                      <h3>{car.name}</h3>
                      <span className={styles.carCategory}>{car.category}</span>
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.cardPrice}>
                        <span className={styles.currency}>₹</span>
                        <span className={styles.amount}>{car.price}</span>
                        <span className={styles.period}>/day</span>
                      </div>
                      <Link href={`/cars`} className={styles.bookBtnSmall}>
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.carouselControls}>
            <button className={styles.controlBtn} onClick={prevSlide} aria-label="Previous car">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <div className={styles.indicators}>
              {heroCars.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`${styles.indicator} ${idx === currentIndex ? styles.indicatorActive : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
            <button className={styles.controlBtn} onClick={nextSlide} aria-label="Next car">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
