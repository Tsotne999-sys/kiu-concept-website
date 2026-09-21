"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export const editorialEase = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "rise",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "image";
}) {
  const reduced = useReducedMotion();
  // Animate at intersection without hiding useful server-rendered content.
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={
        reduced
          ? { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0 round 4px)" }
          : variant === "image"
            ? {
                clipPath: [
                  "inset(0 0 7% 0 round 4px)",
                  "inset(0 0 0% 0 round 4px)",
                ],
                y: [18, 0],
                opacity: [0.6, 1],
              }
            : { y: [24, 0], opacity: [0.35, 1] }
      }
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -24px 0px" }}
      transition={{
        duration: variant === "image" ? 1.05 : 0.8,
        delay,
        ease: editorialEase,
      }}
    >
      {children}
    </motion.div>
  );
}
export function TextReveal({
  lines,
}: {
  lines: { text: string; className?: string }[];
}) {
  const reduced = useReducedMotion();
  return (
    <motion.span
      className="text-reveal"
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        visible: { transition: { staggerChildren: reduced ? 0 : 0.11 } },
      }}
    >
      {lines.map((line) => (
        <span className={`line-mask ${line.className ?? ""}`} key={line.text}>
          <motion.span
            variants={{
              visible: reduced
                ? { y: "0%", opacity: 1 }
                : {
                    y: ["95%", "0%"],
                    opacity: [0.4, 1],
                    transition: { duration: 0.85, ease: editorialEase },
                  },
            }}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
