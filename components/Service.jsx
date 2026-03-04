'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Strategy',
    text: '経営課題を整理し、事業戦略と実行ロードマップを策定します。',
  },
  {
    title: 'Design',
    text: 'ブランド体験を起点に、UI/UX設計から実装まで一気通貫で伴走します。',
  },
  {
    title: 'Engineering',
    text: 'スケーラブルなシステム設計と高速開発で、継続的な価値提供を支援します。',
  },
];

export default function Service() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-base">
        <h2 className="mb-10 text-2xl font-semibold md:text-3xl">Service</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-card"
            >
              <h3 className="mb-4 text-xl font-medium text-accent">{service.title}</h3>
              <p className="text-sm leading-relaxed text-paper/80">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
