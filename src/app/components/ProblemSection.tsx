'use client';

import { motion } from "motion/react";

export default function ProblemSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          className="mb-8"
          style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.03em' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Games shouldn't have to wait to get paid
        </motion.h2>
        <motion.p
          className="text-muted-foreground"
          style={{ fontSize: '1.25rem', lineHeight: 1.8 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Slow settlement and chargeback risk create real cash-flow drag for studios selling direct.
        </motion.p>
      </div>
    </section>
  );
}
