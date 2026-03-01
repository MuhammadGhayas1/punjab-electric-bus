import { CONTENT } from '@/data/content';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-surface py-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          {CONTENT.footer.copyright}
        </p>
        <p className="mt-1 text-center text-xs text-gray-500">{CONTENT.footer.note}</p>
      </div>
    </footer>
  );
}
