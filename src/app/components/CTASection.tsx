'use client';

import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-40 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          className="relative inline-block mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <h2 className="relative mb-6" style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Explore Fumav for your<br />studio or platform
          </h2>
        </motion.div>

        <motion.p
          className="text-muted-foreground mb-12"
          style={{ fontSize: '1.35rem', lineHeight: 1.7 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Building D2C game commerce? Let's talk.
        </motion.p>

        <motion.a
          href="mailto:aanjanaye@fumav.xyz"
          className="group relative px-10 py-5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 text-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span className="relative z-10 inline-flex items-center gap-3">
            Talk to us
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </motion.a>
      </div>
    </section>
  );
}
