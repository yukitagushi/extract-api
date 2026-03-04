import Link from 'next/link';
import { newsItems } from '@/data/news';

export const metadata = {
  title: 'News | Company',
};

export default function NewsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-base">
        <h1 className="mb-10 text-3xl font-semibold">News</h1>
        <div className="space-y-4">
          {newsItems.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="block rounded-xl border border-white/10 p-5 transition hover:border-accent/70 hover:bg-white/[0.02] md:p-7"
            >
              <p className="mb-2 text-xs text-paper/60">{item.date} / {item.category}</p>
              <h2 className="mb-2 text-lg font-medium md:text-xl">{item.title}</h2>
              <p className="text-sm text-paper/75">{item.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
