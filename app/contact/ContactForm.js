"use client";

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactForm({ companyPhone }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the phone number for WhatsApp (remove any non-numeric characters except +)
    const whatsappNumber = companyPhone.replace(/[^0-9]/g, '');
    
    // Construct the message text
    const messageBody = `Hello My Cars,\n\nMy name is ${name}.\nPhone: ${phone}\n\nMessage:\n${message}`;
    const text = encodeURIComponent(messageBody);
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Your Name</label>
        <input 
          type="text" 
          id="name" 
          placeholder="John Doe" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          placeholder="+91 XXXXX XXXXX" 
          required 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          rows="4" 
          placeholder="How can we help you?" 
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      
      <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
        Send Message (WhatsApp)
      </button>
    </form>
  );
}
