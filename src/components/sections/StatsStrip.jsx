import { CONTENT } from '@/data/content';

export default function StatsStrip() {
  return (
    <section className="border-y border-gray-200 bg-white py-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CONTENT.stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl border border-gray-200 bg-slate-50 p-5 text-left"
            >
              <p className="text-xl font-bold text-brand sm:text-2xl">
                {stat.title}
              </p>
              <p className="mt-2 text-sm text-gray-600">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
