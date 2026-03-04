'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="grid-overlay relative overflow-hidden border-b border-white/10 py-20 md:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="container-base relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs tracking-[0.24em] text-accent md:text-sm"
        >
          CREATIVE & TECHNOLOGY STUDIO
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="max-w-5xl text-4xl font-semibold leading-[1.1] md:text-7xl"
        >
          Build the Future
          <br className="hidden md:block" />
          with Clarity.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 max-w-xl text-sm leading-relaxed text-paper/75 md:text-base"
        >
          私たちは戦略・デザイン・開発を横断し、企業のデジタル変革を実行まで推進するパートナーです。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link href="/contact" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-base">
            お問い合わせ
          </Link>
          <Link href="/news" className="rounded-full border border-white/20 px-6 py-3 text-sm text-paper/90">
            最新ニュース
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
