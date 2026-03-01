import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { CONTENT } from '@/data/content';

export default function Hero() {
  const { badge, headline, subhead, cta, helper, previewLabel } = CONTENT.hero;
  const apkUrl = CONTENT.site.apkUrl;

  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-sm font-medium text-brand">
              {badge}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-600">
              {subhead}
            </p>
            <Link
              href={apkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-dark transition-colors"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              {cta}
            </Link>
            <p className="mt-3 text-sm text-gray-500">{helper}</p>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[520px]">
              <Image
                src="/images/selectCity.png"
                alt="App preview (City selection)"
                width={450}
                height={700}
                className="w-full rounded-2xl object-contain shadow-lg"
                sizes="(max-width: 768px) 92vw, 520px"
                quality={75}
                priority
              />
              <p className="mt-2 text-center text-sm text-gray-500">{previewLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
