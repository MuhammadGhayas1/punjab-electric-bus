import Image from 'next/image';

export default function AppPreview() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              App Interface Preview
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our app provides a clean, user-friendly interface designed specifically for Punjab commuters.
            </p>
            <p className="mt-3 text-gray-600">
              Access bus routes, stops, and fare information for all 7 cities with just a few taps.
            </p>
            <p className="mt-3 text-gray-600">
              Works completely offline – no internet required after initial download.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              {[
                'Easy city selection',
                'Quick route search',
                'Offline accessibility',
                'Real-time fare information',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-brand">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[520px]">
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/selectCity.png"
                  alt="Punjab Electric Bus App Interface"
                  width={450}
                  height={700}
                  className="w-full object-contain"
                  sizes="(max-width: 768px) 92vw, 520px"
                  quality={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

