import { CONTENT } from '@/data/content';

export default function Faq() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-3">
          {CONTENT.faq.map((item) => (
            <details
              key={item.question}
              className="rounded-xl border border-gray-200 bg-white p-4 open:bg-slate-50"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-gray-900">
                {item.question}
              </summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
