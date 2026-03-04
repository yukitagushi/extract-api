import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-base space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent">NEXUS</p>
          <div className="flex gap-5 text-xs text-paper/70">
            <Link href="/">Home</Link>
            <Link href="/news">News</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-xs text-paper/60 md:flex-row md:justify-between">
          <p>© 2026 NEXUS Inc.</p>
          <p>Tokyo / Osaka / Remote</p>
        </div>
      </div>
    </footer>
  );
}
