"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { company } from '../../data/company';
import styles from './Navbar.module.css';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <img src="/images/logo.png" alt={company.name} />

        </Link>
        

        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={pathname === '/' ? styles.active : ''} onClick={() => setMobileMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" className={pathname === '/about' ? styles.active : ''} onClick={() => setMobileMenuOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/cars" className={pathname === '/cars' ? styles.active : ''} onClick={() => setMobileMenuOpen(false)}>
                CARS
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === '/contact' ? styles.active : ''} onClick={() => setMobileMenuOpen(false)}>
                CONTACT
              </Link>
            </li>
          </ul>
          
          <div className={styles.rightActions}>
            <button className={styles.iconBtn} aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            
            <a href={`tel:${company.phone}`} className={styles.phoneLink}>
              <span className={styles.phoneIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <span className={styles.phoneNum}>{company.phone}</span>
            </a>
            
            <button className={styles.locationBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              COIMBATORE
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
