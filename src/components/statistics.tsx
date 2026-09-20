"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { DEMO_STATISTICS } from "@/lib/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(value);
  useEffect(() => {
    if (!visible || reduced) return;
    const control = animate(0, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: n => setCurrent(Math.round(n)) });
    return control.stop;
  }, [visible, reduced, value]);
  return <span ref={ref} aria-label={`${value.toLocaleString("en-US")}${suffix}`}><span aria-hidden="true">{current.toLocaleString("en-US")}<em>{suffix}</em></span></span>;
}

export function Statistics() {
  return <section className="statistics" aria-labelledby="stats-title"><div className="shell"><div className="stats-heading"><h2 id="stats-title" className="eyebrow">POSSIBILITY, IN PERSPECTIVE</h2><span className="demo-label">DEMO DATA · NOT KIU STATISTICS</span></div><div className="stats-grid">{DEMO_STATISTICS.map(stat => <div className="stat" key={stat.label}><div className="stat-number"><Counter value={stat.value} suffix={stat.suffix} /></div><p>{stat.label}</p></div>)}</div><p className="stats-note">Sample figures shown only to demonstrate the design.</p></div></section>;
}
