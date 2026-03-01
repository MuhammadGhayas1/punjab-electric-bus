import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Muhammad Ghayas',
    role: 'Product & UI Engineering',
    focus: 'User Experience, Frontend Architecture, Visual Design',
    bio: 'Turning complex public service problems into intuitive, citizen-friendly digital experiences.',
    image: '/images/MuhammadGhayas.png',
    imagePosition: 'object-[center_20%]',
    linkedIn:
      'https://www.linkedin.com/in/muhammad-ghayas-b21372231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Rizwan Ali',
    role: 'Data & Research Lead',
    focus: 'Data Collection, Verification, Route Intelligence',
    bio: 'Ensuring every route, stop, and fare is accurate and verified from official government sources.',
    image: '/images/RizwanAli.png',
    imagePosition: 'object-[center_15%]',
    linkedIn: 'https://www.linkedin.com/in/rizwan-ali-770855323/',
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          The Team
        </h2>
        <p className="mt-3 max-w-2xl text-base text-gray-600 md:text-lg">
          The people building a reliable, citizen-first transport experience for Punjab.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-12">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={member.image}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 520px"
                  quality={72}
                  className={`object-cover ${member.imagePosition}`}
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="mt-1 text-base font-semibold text-emerald-700">{member.role}</p>
                <p className="mt-3 text-gray-700">Focus: {member.focus}</p>
                <p className="mt-4 text-gray-600">{member.bio}</p>
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                  View LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
