"use client";
import { useRef, type PointerEvent } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { useAmbientMotion } from "@/lib/use-media-query";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const bounds = useRef<DOMRect | null>(null);
  const ambient = useAmbientMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 45, damping: 25, mass: 0.8 });
  const y = useSpring(pointerY, { stiffness: 45, damping: 25, mass: 0.8 });
  function move(event: PointerEvent<HTMLElement>) {
    if (!ambient || !bounds.current) return;
    const rect = bounds.current;
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 14);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 10);
  }
  return (
    <section
      className="hero"
      id="home"
      ref={ref}
      aria-labelledby="hero-title"
      onPointerEnter={(event) => {
        bounds.current = event.currentTarget.getBoundingClientRect();
      }}
      onPointerMove={move}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      <motion.div className="hero-image" style={{ y: ambient ? scrollY : 0 }}>
        <motion.div
          className="hero-photo"
          style={{ x: ambient ? x : 0, y: ambient ? y : 0 }}
        >
          <Image
            src="/images/residence.webp"
            alt="Modern KIU campus buildings surrounded by a pine forest"
            fill
            priority
            sizes="100vw"
          />
        </motion.div>
      </motion.div>
      <div className="hero-shade" />
      <div className="hero-content shell">
        <div className="hero-intro">
          <p className="eyebrow hero-eyebrow">
            <span /> A NEW PERSPECTIVE. A WORLD OF POSSIBILITY.
          </p>
          <h1 id="hero-title">
            <span className="hero-title-row">
              <span className="hero-word-mask">
                <span className="hero-word word-one">Study.</span>
              </span>{" "}
              <span className="hero-word-mask">
                <span className="hero-word word-two">Build.</span>
              </span>
            </span>
            <span className="hero-title-row hero-title-future">
              <span className="hero-word-mask">
                <span className="hero-word word-three">Shape the</span>
              </span>{" "}
              <span className="hero-word-mask">
                <span className="hero-word word-four">Future.</span>
              </span>
            </span>
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
        </div>
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
