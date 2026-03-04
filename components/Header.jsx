import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base/85 backdrop-blur">
      <div className="container-base flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.24em] text-accent">
          COMPANY
        </Link>
        <nav className="flex items-center gap-5 text-sm text-paper/80 md:gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-paper">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
