'use client';

import { motion } from "motion/react";

export default function AudienceSection() {
  const items = [
    'Gaming studios with webshop ambitions',
    'Live-ops driven businesses',
    'Direct-to-consumer merchants',
    'High-volume repeat purchase models'
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6" style={{ fontSize: '2.75rem', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.03em' }}>
              Built for studios selling direct
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
              Fumav is designed for gaming operators with recurring purchases, live-ops rhythms, and D2C ambitions.
            </p>
          </motion.div>

          <motion.div
            className="relative bg-card/50 border border-border backdrop-blur-sm rounded-2xl p-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />

            <ul className="space-y-5 relative z-10">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <div className="relative w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-foreground" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
