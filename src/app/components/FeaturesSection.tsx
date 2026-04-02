'use client';

import { motion } from "motion/react";

export default function FeaturesSection() {
  const features = [
    {
      title: 'Instant settlement',
      description: 'Access funds faster and reduce cash-cycle pressure.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    },
    {
      title: 'Zero chargeback fraud',
      description: 'Fumav guarantees zero chargeback fraud.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      )
    },
    {
      title: 'Designed for gaming checkout',
      description: 'Designed for repeat purchases, live ops, and D2C growth.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
          <rect x="2" y="7" width="20" height="14" rx="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    }
  ];

  return (
    <section id="product" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-center mb-20"
          style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.03em' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Built for studios selling<br />direct to consumers
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative p-10 bg-card/50 border border-border backdrop-blur-sm rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              initial={{
                opacity: 0,
                y: 30,
                borderColor: 'rgba(255,255,255,0.1)',
                boxShadow: '0 0 0 rgba(234,88,12,0)',
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                borderColor: 'rgba(234,88,12,0.32)',
                boxShadow: '0 24px 60px rgba(234,88,12,0.12)',
              }}
              viewport={{ amount: 0.55 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.55 }}
                transition={{ delay: index * 0.15 + 0.05, duration: 0.6 }}
                style={{
                  background:
                    'radial-gradient(circle at 50% 18%, rgba(234,88,12,0.16), transparent 55%), linear-gradient(180deg, rgba(234,88,12,0.08), transparent 62%)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="mb-4" style={{ fontSize: '1.35rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
