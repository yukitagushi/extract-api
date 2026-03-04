'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base/80 backdrop-blur-xl">
      <div className="container-base flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.25em] text-accent">
          NEXUS
        </Link>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 md:hidden"
          aria-label="menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-xs">MENU</span>
        </button>

        <nav className="hidden items-center gap-8 text-sm text-paper/80 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-paper">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="container-base pb-4 md:hidden">
          <div className="space-y-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-paper/90 transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
