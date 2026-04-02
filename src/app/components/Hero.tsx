'use client';

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-sm text-primary mb-6 tracking-wide uppercase"
            style={{ fontWeight: 500 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Payments infrastructure for gaming commerce
          </motion.div>
          <motion.h1
            className="mb-6"
            style={{ fontSize: '4.75rem', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.04em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Instant settlement for D2C payments
          </motion.h1>
          <motion.p
            className="text-muted-foreground mb-10 max-w-3xl mx-auto"
            style={{ fontSize: '1.45rem', lineHeight: 1.65 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Get paid faster. Eliminate chargeback fraud.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="mailto:aanjanaye@fumav.xyz"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
            >
              <span className="inline-flex items-center gap-2">
                Talk to us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 border border-border text-foreground rounded-lg hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              See how it works
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
