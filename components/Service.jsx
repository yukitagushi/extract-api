'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Brand Strategy',
    text: '市場分析と顧客理解を軸に、持続可能な成長戦略を設計します。',
    index: '01',
  },
  {
    title: 'Experience Design',
    text: 'Web / App / Contentsを横断した一貫性のある体験をデザインします。',
    index: '02',
  },
  {
    title: 'Product Engineering',
    text: '堅牢なアーキテクチャと高速な開発体制でプロダクト価値を最大化します。',
    index: '03',
  },
];

export default function Service() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-base">
        <h2 className="mb-10 text-2xl font-semibold md:text-4xl">Service</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-accent/50"
            >
              <p className="mb-6 text-xs tracking-[0.2em] text-paper/50">{service.index}</p>
              <h3 className="mb-4 text-xl font-medium text-accent">{service.title}</h3>
              <p className="text-sm leading-relaxed text-paper/80">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
