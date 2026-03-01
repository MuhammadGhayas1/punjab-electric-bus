import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export const metadata = {
  title: 'Punjab Electric Bus App - Download APK (Official Routes & Fares)',
  description:
    'Download the Punjab Electric Bus app for Android. Check routes, stops, and fares for Lahore, Sahiwal, and 7 other cities. Works offline.',
  keywords:
    'Punjab electric bus app, green bus lahore schedule, sahiwal bus route, download apk, punjab transit app',
  authors: [{ name: 'Muhammad Ghayas' }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Punjab Electric Bus App',
    description: "Download the offline-ready guide for Punjab's Green Buses.",
    url: siteUrl,
    siteName: 'Punjab Electric Bus',
    type: 'website',
    images: ['/images/app_ui_screenshot.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Punjab Electric Bus App - Download APK (Official Routes & Fares)',
    description:
      'Download the Punjab Electric Bus app for Android. Check routes, stops, and fares for Lahore, Sahiwal, and 7 other cities. Works offline.',
    images: ['/images/selectCity.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  // PASTE GOOGLE VERIFICATION META TAG HERE (or use metadata.verification.google below)
  verification: {
    google: 'y1iscAVrNszNQO0sN8wuapXi8cAOjHmKK5K6aosPfAE',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-PK" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
