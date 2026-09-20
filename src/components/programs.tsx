"use client";

import { useState, type MouseEvent } from "react";
import {
  ArrowUpRight,
  Braces,
  Pi,
  ChartNoAxesCombined,
  Atom,
} from "lucide-react";
import { programs } from "@/lib/content";
import { Reveal } from "./motion";
import { DetailDialog } from "./detail-dialog";

const icons = [Braces, Pi, ChartNoAxesCombined, Atom];

export function Programs() {
  const [selected, setSelected] = useState<number | null>(null);
  const program = selected === null ? null : programs[selected];
  const move = (event: MouseEvent<HTMLButtonElement>) => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)")
        .matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`,
    );
  };
  return (
    <section
      className="programs section-pad"
      id="programs"
      aria-labelledby="programs-title"
    >
      <div className="shell">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-index">02 /</span> FIND YOUR DIRECTION
            </p>
            <h2 id="programs-title">
              Big ideas.
              <br />
              <span className="muted">Your starting point.</span>
            </h2>
          </div>
          <div className="section-intro">
            <p>
              Follow your curiosity. Find the field
              <br className="desktop-break" /> that brings your ambition to
              life.
            </p>
            <span className="small-note">
              Academic areas · Concept selection
            </span>
          </div>
        </Reveal>
        <div className="program-grid">
          {programs.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={p.id} delay={i * 0.06}>
                <button
                  className={`program-card ${i === 0 ? "featured" : ""}`}
                  onMouseMove={move}
                  onClick={() => setSelected(i)}
                  aria-label={`Explore ${p.title}`}
                >
                  <div className="program-card-top">
                    <Icon size={28} strokeWidth={1.3} />
                    <span>{p.number}</span>
                  </div>
                  <div className="program-card-copy">
                    {i === 0 && <span className="featured-tag">SPOTLIGHT</span>}
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                  <div className="program-card-bottom">
                    <span>Explore the possibilities</span>
                    <ArrowUpRight size={22} />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
        <p className="program-disclaimer">
          An exploration of academic interests. For current programs and entry
          requirements, visit the{" "}
          <a href="https://www.kiu.edu.ge/eng" target="_blank" rel="noreferrer">
            official KIU website <ArrowUpRight size={12} />
          </a>
          .
        </p>
        <DetailDialog
          open={program !== null}
          onClose={() => setSelected(null)}
          title={program?.title ?? ""}
        >
          {program && (
            <>
              <p>{program.detail}</p>
              <div className="topic-chips">
                {program.topics.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <p className="small-note">
                Illustrative topics for this portfolio concept, not an official
                curriculum.
              </p>
              <a
                className="button button-dark"
                href={
                  program.id === "computer-science"
                    ? "#computer-science"
                    : "https://www.kiu.edu.ge/eng"
                }
                onClick={() => setSelected(null)}
              >
                {program.id === "computer-science"
                  ? "Discover Computer Science"
                  : "Visit official KIU website"}
                <ArrowUpRight size={18} />
              </a>
            </>
          )}
        </DetailDialog>
      </div>
    </section>
  );
}
