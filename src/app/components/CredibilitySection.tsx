'use client';

import { motion } from "motion/react";

export default function CredibilitySection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          className="mb-8"
          style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.03em' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Built with a deep understanding<br />of gaming monetization
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-3xl mx-auto"
          style={{ fontSize: '1.25rem', lineHeight: 1.8 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Fumav is shaped by the economics of gaming commerce: checkout conversion, live-ops cadence,
          repeat purchases, and direct-to-consumer growth.
        </motion.p>
      </div>
    </section>
  );
}
