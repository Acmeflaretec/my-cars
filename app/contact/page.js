import { company } from '../../data/company';
import styles from './page.module.css';
import ContactForm from './ContactForm';

export const metadata = {
  title: "Contact Us | MY CARS",
  description: "Get in touch with MY CARS.",
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className={styles.headerOverlay}></div>
        <div className="container relative" style={{ zIndex: 10 }}>
          <h1 className="heading-lg">Contact Us</h1>
          <p className={styles.breadcrumb}>Home &gt; Contact us</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`container ${styles.contactGrid}`}>
          <div className={styles.contactInfo}>
            <span className={styles.subheading}>Get In Touch</span>
            <h2 className="heading-md mb-4">Contact Details</h2>
            <p className={styles.description}>
              Have any questions or need to book a car? Feel free to contact us. We are here to help you get the best self-drive car experience in Tiruppur.
            </p>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h3>Phone</h3>
                  <a href={`tel:${company.phone}`}>{company.displayPhone}</a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>{company.address}</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div>
                  <h3>Instagram</h3>
                  <a href={company.instagram} target="_blank" rel="noopener noreferrer">Follow Us</a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactFormWrapper}>
            <div className={styles.formCard}>
              <h3 className="heading-md">Send us a Message</h3>
              <ContactForm companyPhone={company.phone} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Maps Embed if needed in the future */}
      <section className={styles.mapSection}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.8878564299946!2d77.34685361480373!3d11.121689392087574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907ba918f0293%3A0x6b446a81e330a84e!2sOld%20Bus%20Stand%2C%20Jeeva%20Colony%2C%20Khaderpet%2C%20Rayapuram%2C%20Tiruppur%2C%20Tamil%20Nadu%20641606!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>
    </>
  );
}
