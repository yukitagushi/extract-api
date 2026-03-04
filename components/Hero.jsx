'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="grid-overlay border-b border-white/10 py-20 md:py-28">
      <div className="container-base">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm tracking-[0.18em] text-accent"
        >
          DIGITAL TRANSFORMATION PARTNER
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.65 }}
          className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl"
        >
          事業成長を加速する、
          <br className="hidden md:block" />
          体験設計とテクノロジー。 
        </motion.h1>
      </div>
    </section>
  );
}
