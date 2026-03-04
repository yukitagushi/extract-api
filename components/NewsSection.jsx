import Link from 'next/link';
import { newsItems } from '@/data/news';

export default function NewsSection() {
  return (
    <section className="border-y border-white/10 py-16 md:py-24">
      <div className="container-base">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold md:text-4xl">News</h2>
          <Link href="/news" className="text-sm text-accent transition hover:opacity-75">
            View all
          </Link>
        </div>
        <div className="space-y-4">
          {newsItems.slice(0, 3).map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="block rounded-xl border border-white/10 px-5 py-5 transition hover:border-accent/70 hover:bg-white/[0.02] md:px-7"
            >
              <p className="mb-2 text-xs text-paper/60">{item.date} / {item.category}</p>
              <h3 className="mb-2 text-base font-medium md:text-xl">{item.title}</h3>
              <p className="text-sm text-paper/75">{item.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
