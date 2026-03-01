import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import StatsStrip from '@/components/sections/StatsStrip';
import Features from '@/components/sections/Features';
import HowToGet from '@/components/sections/HowToGet';
import Team from '@/components/sections/Team';
import Faq from '@/components/sections/Faq';
import CtaBanner from '@/components/sections/CtaBanner';
import { CONTENT } from '@/data/content';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Punjab Electric Bus',
      inLanguage: 'en-PK',
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Punjab Electric Bus',
      url: siteUrl,
      areaServed: 'Punjab, Pakistan',
      logo: `${siteUrl}/images/bus%20logo.png`,
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}/#app`,
      name: 'Punjab Electric Bus',
      applicationCategory: 'TravelApplication',
      operatingSystem: 'Android',
      areaServed: 'Punjab, Pakistan',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'PKR',
      },
      keywords:
        'Punjab Electric Bus, electric bus Punjab, bus routes Punjab, bus stops Punjab, bus fares Punjab, Lahore bus routes, offline bus app Pakistan',
      url: CONTENT.site.apkUrl,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: CONTENT.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Hero />
        <About />
        <StatsStrip />
        <Features />
        <Team />
        <HowToGet />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
