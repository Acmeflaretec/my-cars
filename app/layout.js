import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://mycars.com'), // Replace with actual domain
  title: {
    default: "MY CARS - Premium Self-Drive Car Rentals in Tirupur",
    template: "%s | MY CARS Tirupur"
  },
  description: "Affordable and premium self-drive car rental services in Tirupur. Explore our diverse fleet of hatchbacks, sedans, SUVs, and MPVs. Book via WhatsApp today!",
  keywords: ["self drive cars Tirupur", "car rental Tirupur", "rent a car Tirupur", "MY CARS", "hatchback rental", "SUV rental Tirupur"],
  openGraph: {
    title: "MY CARS - Premium Self-Drive Car Rentals in Tirupur",
    description: "Affordable and premium self-drive car rental services in Tirupur. Explore our diverse fleet of hatchbacks, sedans, SUVs, and MPVs. Book via WhatsApp today!",
    url: '/',
    siteName: 'MY CARS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MY CARS - Premium Self-Drive Car Rentals in Tirupur',
    description: 'Affordable and premium self-drive car rental services in Tirupur. Explore our diverse fleet.',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  "name": "MY CARS",
  "image": "/images/logo.png",
  "telephone": "+917560841509",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Old Bustand, Jeeva Colony, Khaderpet, Rayapuram",
    "addressLocality": "Tiruppur",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641606",
    "addressCountry": "IN"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
