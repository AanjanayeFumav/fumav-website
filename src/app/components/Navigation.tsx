'use client';

import { motion, useScroll, useTransform } from "motion/react";

export default function Navigation() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 100], [0.3, 0.8]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(12, 12, 14, 0.8)", "rgba(12, 12, 14, 0.95)"]
  );

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor,
        borderBottom: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <motion.div
            className="text-xl tracking-tight"
            style={{ fontWeight: 600 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Fumav
          </motion.div>
          <div className="hidden md:flex items-center gap-10">
            {[
              { href: "#product", label: "Product" },
              { href: "#how-it-works", label: "How it works" },
              { href: "#why-now", label: "Why now" },
              { href: "#contact", label: "Contact" }
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
        <motion.a
          href="mailto:aanjanaye@fumav.xyz"
          className="group px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="inline-flex items-center gap-2">
            Talk to us
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </motion.a>
      </div>
    </motion.nav>
  );
}
