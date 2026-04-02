'use client';

import { motion } from "motion/react";

export default function ProcessSection() {
  const steps = [
    { number: '01', title: 'Connect once', description: 'Link bank account' },
    { number: '02', title: 'Choose Fumav', description: 'Select at checkout' },
    { number: '03', title: 'Instant payout', description: 'Merchant gets paid fast' }
  ];

  return (
    <section id="how-it-works" className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            className="mb-6"
            style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            A faster payment flow
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto"
            style={{ fontSize: '1.2rem', lineHeight: 1.8 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Players link a bank account, choose Fumav at checkout, and merchants get paid fast.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="group bg-card/50 border border-border backdrop-blur-sm rounded-2xl p-8 hover:border-primary/50 hover:bg-card/70 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="relative">
                  <div className="text-primary mb-6 relative" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                    <span className="relative z-10">{step.number}</span>
                    <div className="absolute inset-0 bg-primary/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-border to-transparent z-20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 relative bg-card/40 border border-border backdrop-blur-sm rounded-2xl p-8 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="text-primary mb-3 text-sm tracking-[0.24em] uppercase" style={{ fontWeight: 500 }}>
              In the background
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="mb-2" style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
                  Fumav handles payment routing and settlement behind the scenes
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  Risk checks, settlement logic, and payout orchestration stay invisible to the player experience.
                </p>
              </div>

              <div className="flex-1 min-w-0">
                <div className="relative flex items-center justify-between gap-4">
                  <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
                  {[
                    { label: 'Risk checks' },
                    { label: 'Routing' },
                    { label: 'Settlement' }
                  ].map((item, index) => (
                    <div key={item.label} className="relative flex flex-col items-center gap-3 flex-1">
                      <div className="relative w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(234,88,12,0.35)]">
                        <div
                          className="absolute inset-0 rounded-full bg-primary/40 animate-ping"
                          style={{ animationDelay: `${index * 0.4}s`, animationDuration: '2.4s' }}
                        />
                      </div>
                      <div className="text-sm text-muted-foreground text-center">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
