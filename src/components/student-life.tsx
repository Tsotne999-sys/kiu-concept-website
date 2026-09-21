"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useAmbientMotion } from "@/lib/use-media-query";
import { Reveal, TextReveal } from "./motion";

export function StudentLife() {
  const ref = useRef<HTMLElement>(null);
  const ambient = useAmbientMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  return (
    <section
      ref={ref}
      className="student-life"
      id="student-life"
      aria-labelledby="life-title"
    >
      <motion.div className="life-photo" style={{ y: ambient ? y : 0 }}>
        <Image
          src="/images/students.webp"
          alt="Students sharing a study session at KIU"
          fill
          sizes="100vw"
        />
      </motion.div>
      <div className="life-shade" />
      <div className="shell life-content">
        <Reveal>
          <p className="eyebrow">
            <span className="section-index">05 /</span> THE DAYS YOU’LL REMEMBER
          </p>
        </Reveal>
        <h2 id="life-title">
          <TextReveal
            lines={[
              { text: "More than your degree.", className: "life-title-lead" },
              { text: "Your next chapter.", className: "life-title-accent" },
            ]}
          />
        </h2>
        <Reveal delay={0.15}>
          <p className="life-description">
            The people you meet. The ideas you share.
            <br />
            The person you become along the way.
          </p>
          <a className="text-link light-link" href="#campus">
            Find your place <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
      <span className="life-caption">LIFE, IN GOOD COMPANY.</span>
    </section>
  );
}
