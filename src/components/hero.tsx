"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  return (
    <section className="hero" id="home" ref={ref} aria-labelledby="hero-title">
      <motion.div className="hero-image" style={{ y: reduced ? 0 : y }}>
        <Image
          src="/images/residence.webp"
          alt="Modern KIU campus buildings surrounded by a pine forest"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="hero-shade" />
      <div className="hero-content shell">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="hero-intro"
        >
          <p className="eyebrow hero-eyebrow">
            <span /> A NEW PERSPECTIVE. A WORLD OF POSSIBILITY.
          </p>
          <h1 id="hero-title">
            Study. Build.
            <br />
            <span>Shape the Future.</span>
          </h1>
          <p className="hero-description">
            An international university where
            <br className="desktop-break" /> technology, science and ambition
            meet.
          </p>
          <div className="actions">
            <a className="button button-light" href="#about">
              Explore KIU <ArrowUpRight size={18} />
            </a>
            <a className="button button-outline" href="#programs">
              Discover Programs <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="hero-bottom shell">
        <a className="scroll-cue" href="#about">
          <span className="circle-icon">
            <ArrowDown size={16} />
          </span>{" "}
          SCROLL TO EXPLORE
        </a>
        <span className="hero-location">
          <MapPin size={15} /> KUTAISI, GEORGIA{" "}
          <span className="coordinates">42.2679° N &nbsp; 42.6946° E</span>
        </span>
        <span className="concept-label">INDEPENDENT CONCEPT</span>
      </div>
      <div className="hero-side-note" aria-hidden="true">
        ROOTED IN NATURE. BUILT FOR TOMORROW.
      </div>
    </section>
  );
}
