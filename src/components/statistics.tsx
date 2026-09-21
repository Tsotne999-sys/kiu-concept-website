"use client";
import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { DEMO_STATISTICS } from "@/lib/content";
import { Reveal } from "./motion";

function Counter({
  value,
  suffix,
  index,
}: {
  value: number;
  suffix: string;
  index: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.7 });
  const reduced = useReducedMotion();
  const count = useMotionValue(value);
  const formatted = useTransform(count, (n) =>
    Math.round(n).toLocaleString("en-US"),
  );
  useEffect(() => {
    if (reduced) {
      count.set(value);
      return;
    }
    if (!visible) return;
    count.set(0);
    const control = animate(count, value, {
      duration: 1.9,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => control.stop();
  }, [visible, reduced, value, index, count]);
  return (
    <span ref={ref} className="counter">
      <span className="sr-only">
        {value.toLocaleString("en-US")}
        {suffix}, demo figure
      </span>
      <span className="counter-reserve" aria-hidden="true">
        {value.toLocaleString("en-US")}
        <em>{suffix}</em>
      </span>
      <span className="counter-live" aria-hidden="true">
        <motion.span>{formatted}</motion.span>
        <em>{suffix}</em>
      </span>
    </span>
  );
}
export function Statistics() {
  return (
    <section className="statistics" aria-labelledby="stats-title">
      <div className="shell">
        <div className="stats-heading">
          <h2 id="stats-title" className="eyebrow">
            POSSIBILITY, IN PERSPECTIVE
          </h2>
          <span className="demo-label">DEMO DATA · NOT KIU STATISTICS</span>
        </div>
        <div className="stats-grid">
          {DEMO_STATISTICS.map((stat, index) => (
            <Reveal className="stat" key={stat.label} delay={index * 0.08}>
              <div className="stat-number">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  index={index}
                />
              </div>
              <p>{stat.label}</p>
            </Reveal>
          ))}
        </div>
        <p className="stats-note">
          Sample figures shown only to demonstrate the design.
        </p>
      </div>
    </section>
  );
}
