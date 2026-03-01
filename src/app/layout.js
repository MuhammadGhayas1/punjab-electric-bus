import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export const metadata = {
  title: 'Punjab Electric Bus App | Offline Routes, Stops & Verified Fares in Punjab, Pakistan',
  description:
    'Punjab Electric Bus is an offline-first Android app for bus routes, stops and verified fares across Lahore, Multan, Rawalpindi, Faisalabad, Sahiwal, Sargodha and Gujranwala. No tracking. Free.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Punjab Electric Bus App | Offline Routes, Stops & Verified Fares in Punjab, Pakistan',
    description:
      'Punjab Electric Bus is an offline-first Android app for bus routes, stops and verified fares across Lahore, Multan, Rawalpindi, Faisalabad, Sahiwal, Sargodha and Gujranwala. No tracking. Free.',
    url: siteUrl,
    siteName: 'Punjab Electric Bus',
    type: 'website',
    images: [
      {
        url: '/images/selectCity.png',
        width: 1024,
        height: 1024,
        alt: 'Punjab Electric Bus app preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Punjab Electric Bus App | Offline Routes, Stops & Verified Fares in Punjab, Pakistan',
    description:
      'Punjab Electric Bus is an offline-first Android app for bus routes, stops and verified fares across Lahore, Multan, Rawalpindi, Faisalabad, Sahiwal, Sargodha and Gujranwala. No tracking. Free.',
    images: ['/images/selectCity.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
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
