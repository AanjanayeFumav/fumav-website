'use client';

import { motion } from "motion/react";

export default function MarketSection() {
  const comparisons = [
    {
      label: 'Settlement timing',
      fumav: 'Instant',
      industry: '7-30 days'
    },
    {
      label: 'Chargeback fraud cost to merchants',
      fumav: '$0',
      industry: '$150K per $1M volume'
    }
  ];

  return (
    <section id="why-now" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="mb-8"
          style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.03em' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          D2C game commerce is growing
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-16"
          style={{ fontSize: '1.25rem', lineHeight: 1.8 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          More studios are moving players to webshops. Payment infrastructure needs to catch up.
        </motion.p>

        <div className="relative bg-card/40 border border-border backdrop-blur-sm rounded-3xl overflow-hidden">
          <div className="hidden md:grid grid-cols-[1.2fr_1fr_1fr] border-b border-border/80 bg-background/30">
            <div className="p-6 text-sm uppercase tracking-[0.22em] text-muted-foreground">Comparison</div>
            <div className="p-6 text-sm uppercase tracking-[0.22em] text-primary">Fumav</div>
            <div className="p-6 text-sm uppercase tracking-[0.22em] text-muted-foreground">Industry average</div>
          </div>

          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.label}
              className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-0 border-b last:border-b-0 border-border/70"
              initial={{
                opacity: 0,
                y: 30,
                boxShadow: '0 0 0 rgba(234,88,12,0)',
                backgroundColor: 'rgba(255,255,255,0)',
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                boxShadow: 'inset 0 1px 0 rgba(234,88,12,0.08), 0 16px 40px rgba(234,88,12,0.08)',
                backgroundColor: 'rgba(234,88,12,0.03)',
              }}
              viewport={{ amount: 0.5 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border/70">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3 md:hidden">
                  Comparison
                </div>
                <div className="text-foreground" style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                  {comparison.label}
                </div>
              </div>
              <div className="p-6 md:p-8 bg-primary/6 border-b md:border-b-0 md:border-r border-border/70">
                <div className="text-xs uppercase tracking-[0.22em] text-primary mb-3 md:hidden">
                  Fumav
                </div>
                <div className="text-primary mb-2" style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.03em' }}>
                  {comparison.fumav}
                </div>
                <p className="text-muted-foreground" style={{ fontSize: '0.98rem', lineHeight: 1.7 }}>
                  {comparison.label === 'Settlement timing'
                    ? 'Cash arrives immediately instead of waiting on payout cycles.'
                    : 'Zero chargeback fraud cost to the merchant.'}
                </p>
              </div>
              <div className="p-6 md:p-8">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3 md:hidden">
                  Industry average
                </div>
                <div className="text-foreground mb-2" style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.03em' }}>
                  {comparison.industry}
                </div>
                <p className="text-muted-foreground" style={{ fontSize: '0.98rem', lineHeight: 1.7 }}>
                  {comparison.label === 'Settlement timing'
                    ? 'Typical delays across gaming payment providers and app store payouts.'
                    : 'Chargeback fraud can become a meaningful drag on margin at scale.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
