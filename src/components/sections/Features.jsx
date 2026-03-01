import { CONTENT } from '@/data/content';
import { BadgeCheck, MapPin, ShieldCheck, WifiOff } from 'lucide-react';

const iconMap = {
  WifiOff,
  Ticket: BadgeCheck,
  Lock: ShieldCheck,
  MapPin,
};

export default function Features() {
  const features = CONTENT.features;
  return (
    <section id="why" className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Why Use This App
        </h2>
        <p className="mt-2 text-gray-600">
          Built for riders who want simplicity, accuracy, and privacy.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            const isCities = feature.id === 'cities';
            return (
              <article
                key={feature.id}
                className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ${
                  isCities ? 'md:col-span-2' : ''
                }`}
              >
                {Icon && (
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <Icon className="h-6 w-6" />
                  </span>
                )}
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
