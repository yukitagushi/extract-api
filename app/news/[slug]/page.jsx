import { notFound } from 'next/navigation';
import { newsItems } from '@/data/news';

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export default function NewsDetailPage({ params }) {
  const item = newsItems.find((entry) => entry.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24">
      <div className="container-base max-w-3xl">
        <p className="mb-3 text-xs text-paper/60">{item.date} / {item.category}</p>
        <h1 className="mb-8 text-3xl font-semibold leading-tight md:text-4xl">{item.title}</h1>
        <div className="space-y-5 text-sm leading-relaxed text-paper/85 md:text-base">
          {item.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
