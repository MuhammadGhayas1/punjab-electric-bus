import Link from 'next/link';
import { Download } from 'lucide-react';
import { CONTENT } from '@/data/content';

export default function CtaBanner() {
  const { headline, subhead, buttonText } = CONTENT.ctaBanner;
  const apkUrl = CONTENT.site.apkUrl;
  return (
    <section id="download" className="bg-brand py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {headline}
        </h2>
        <p className="mt-4 text-lg text-brand-light">{subhead}</p>
        <Link
          href={apkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-brand shadow-sm hover:bg-gray-100 transition-colors"
        >
          <Download className="h-5 w-5" aria-hidden="true" />
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
