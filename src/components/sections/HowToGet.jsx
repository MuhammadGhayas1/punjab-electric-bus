import { CONTENT } from '@/data/content';

function StepNumber({ number }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
      {number}
    </span>
  );
}

export default function HowToGet() {
  const steps = CONTENT.steps;
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          How to Get Started
        </h2>
        <p className="mt-2 text-gray-600">
          Three quick steps to start using the app.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="flex items-center gap-4">
                <StepNumber number={step.number} />
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
