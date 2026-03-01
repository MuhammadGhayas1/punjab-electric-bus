'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { CONTENT } from '@/data/content';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#why', label: 'Why Use This App' },
  { href: '#team', label: 'Team' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const apkUrl = CONTENT.site.apkUrl;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-800 bg-emerald-700/95 text-white backdrop-blur-md">
      <nav className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="relative h-8 w-28 overflow-hidden">
              <Image
                src="/images/bus logo.png"
                alt="Punjab Electric Bus logo"
                fill
                sizes="112px"
                className="object-contain"
                quality={75}
              />
            </span>
            <span className="max-w-[150px] truncate text-sm font-semibold tracking-tight sm:max-w-none sm:text-lg">
              Punjab Electric Bus
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={apkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download
            </Link>
            <div className="relative ml-4 h-10 w-10 md:h-12 md:w-12 shrink-0">
              <Image
                src="/images/cm maryam nawaz.png"
                alt="CM Maryam Nawaz"
                fill
                sizes="48px"
                className="rounded-md object-contain"
                quality={72}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <div className="relative h-10 w-10 shrink-0">
              <Image
                src="/images/cm maryam nawaz.png"
                alt="CM Maryam Nawaz"
                fill
                sizes="40px"
                className="rounded-md object-contain"
                quality={72}
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white transition hover:bg-white/10"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-nav-menu" className="mt-3 space-y-1 border-t border-white/20 pt-3 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-white/95 transition hover:bg-white/10"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={apkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/60 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
              onClick={closeMenu}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
