import { CONTENT } from '@/data/content';

export default function Cities() {
  const cities = CONTENT.cities;
  const duplicated = [...cities, ...cities];
  return (
    <section className="overflow-hidden bg-surface py-10">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-4">
        {duplicated.map((city, index) => (
          <span
            key={`${city}-${index}`}
            className="text-2xl font-bold text-gray-400 sm:text-3xl"
          >
            {city}
          </span>
        ))}
      </div>
    </section>
  );
}
