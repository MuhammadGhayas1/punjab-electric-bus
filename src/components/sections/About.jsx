import { CONTENT } from '@/data/content';

export default function About() {
  const { heading, paragraph1, paragraph2 } = CONTENT.about;

  return (
    <section id="about" className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{heading}</h2>
        <p className="mt-4 max-w-3xl text-base text-gray-700 md:text-lg">{paragraph1}</p>
        <p className="mt-3 max-w-3xl text-base text-gray-700 md:text-lg">{paragraph2}</p>
      </div>
    </section>
  );
}
