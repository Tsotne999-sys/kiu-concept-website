"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  // Content remains visible in server HTML and when JavaScript is unavailable.
  return <motion.div className={className} initial={false} whileInView={reduced ? {} : { y: [22, 0], opacity: [.6, 1] }} viewport={{ once: true, amount: .12 }} transition={{ duration: .75, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
