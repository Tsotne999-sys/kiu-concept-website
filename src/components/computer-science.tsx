"use client";
import {
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, Braces, Terminal } from "lucide-react";
import { researchTopics } from "@/lib/content";
import { Reveal, TextReveal, editorialEase } from "./motion";

export function ComputerScience() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const stage = useRef<HTMLDivElement>(null);
  const visible = useInView(stage, { once: true, amount: 0.35 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const topic = researchTopics[active];
  function changeTopic(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % researchTopics.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index + researchTopics.length - 1) % researchTopics.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = researchTopics.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }
  return (
    <section
      className="computer-science section-pad"
      id="computer-science"
      aria-labelledby="cs-title"
    >
      <div className="tech-grid" aria-hidden="true" />
      <div className="shell cs-layout">
        <div className="cs-copy">
          <Reveal>
            <p className="eyebrow">
              <span className="section-index">03 /</span> THE COMPUTER SCIENCE
              EDIT
            </p>
          </Reveal>
          <h2 id="cs-title">
            <TextReveal
              lines={[
                { text: "Build what" },
                { text: "comes next.", className: "cs-title-accent" },
              ]}
            />
          </h2>
          <Reveal delay={0.1}>
            <p className="cs-description">
              Don’t just imagine the future. Learn to create it.
              <br />
              Start with a question. Follow it with code.
            </p>
          </Reveal>
          <div
            className="cs-topics"
            role="tablist"
            aria-label="Explore computing topics"
          >
            {researchTopics.map((t, i) => (
              <button
                key={t.name}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`topic-${i}`}
                aria-controls="code-interface"
                aria-selected={active === i}
                tabIndex={active === i ? 0 : -1}
                className={active === i ? "active" : ""}
                onClick={() => setActive(i)}
                onKeyDown={(e) => changeTopic(e, i)}
              >
                {active === i && (
                  <motion.span
                    className="topic-selection"
                    layoutId="selected-topic"
                    transition={{
                      duration: reduced ? 0 : 0.3,
                      ease: editorialEase,
                    }}
                  />
                )}
                <span>{t.name}</span>
                <ArrowUpRight size={14} />
              </button>
            ))}
          </div>
          <a href="#programs" className="text-link light-link">
            Find your starting point <ArrowRight size={18} />
          </a>
        </div>
        <Reveal className="code-stage" delay={0.15}>
          <div
            ref={stage}
            className={`code-window ${visible ? "is-awake" : ""}`}
          >
            <div className="code-toolbar">
              <span className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="code-filename">{topic.filename}</span>
              <Braces size={16} />
            </div>
            <div
              className="code-body"
              id="code-interface"
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`topic-${active}`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  className="code-sequence"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{
                    duration: reduced ? 0 : 0.2,
                    ease: editorialEase,
                  }}
                >
                  {topic.code.map((line, i) => (
                    <div
                      className="code-line"
                      key={i}
                      style={{ "--line-delay": `${i * 55}ms` } as CSSProperties}
                    >
                      <span className="line-number" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <code
                        className={
                          line.trim().startsWith("//") ||
                          line.trim().startsWith("#")
                            ? "code-comment"
                            : ""
                        }
                      >
                        {line || " "}
                        {i === topic.code.length - 1 && (
                          <span className="code-caret" aria-hidden="true" />
                        )}
                      </code>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="code-status">
              <span>
                <Terminal size={12} /> curiosity → possibility
              </span>
              <span>ILLUSTRATIVE CODE</span>
            </div>
            <div className="code-progress-track" aria-hidden="true">
              <span key={active} />
            </div>
          </div>
          <div className="code-caption">
            <span className="code-caption-mark">&lt;/&gt;</span>
            <p>
              A mindset, not just a skill.
              <br />
              <span>Think deeply. Make something meaningful.</span>
            </p>
          </div>
        </Reveal>
        <div className="research-strip" id="research">
          <p className="eyebrow">A SPIRIT OF DISCOVERY</p>
          <p>
            Every breakthrough begins
            <br />
            with a better question.
          </p>
          <span>
            Explore AI, data and technology
            <br />
            through the topics above.
            <br />
            <small>Concept themes, not verified KIU research projects.</small>
          </span>
        </div>
      </div>
    </section>
  );
}
