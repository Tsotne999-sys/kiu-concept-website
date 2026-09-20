"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Braces, Terminal } from "lucide-react";
import { researchTopics } from "@/lib/content";
import { Reveal } from "./motion";

export function ComputerScience() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const topic = researchTopics[active];
  return <section className="computer-science section-pad" id="computer-science" aria-labelledby="cs-title"><div className="tech-grid" aria-hidden="true" /><div className="shell cs-layout">
    <Reveal className="cs-copy"><p className="eyebrow"><span className="section-index">03 /</span> THE COMPUTER SCIENCE EDIT</p><h2 id="cs-title">Build what<br /><span>comes next.</span></h2><p className="cs-description">Don’t just imagine the future. Learn to create it.<br />Start with a question. Follow it with code.</p><div className="cs-topics" aria-label="Explore computing topics">{researchTopics.map((t, i) => <button key={t.name} className={active === i ? "active" : ""} aria-pressed={active === i} onClick={() => setActive(i)}>{t.name}<ArrowUpRight size={14} /></button>)}</div><a href="#programs" className="text-link light-link">Find your starting point <ArrowRight size={18} /></a></Reveal>
    <Reveal className="code-stage" delay={.15}><div className="code-window"><div className="code-toolbar"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>{topic.filename}</span><Braces size={16} /></div><div className="code-body" aria-label={`Illustrative ${topic.name} pseudocode`}><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .16 }}>{topic.code.map((line, i) => <div className="code-line" key={i}><span className="line-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><code className={line.trim().startsWith("//") || line.trim().startsWith("#") ? "code-comment" : ""}>{line || " "}</code></div>)}</motion.div></AnimatePresence></div><div className="code-status"><span><Terminal size={12} /> curiosity → possibility</span><span>ILLUSTRATIVE CODE</span></div></div><div className="code-caption"><span className="code-caption-mark">&lt;/&gt;</span><p>A mindset, not just a skill.<br /><span>Think deeply. Make something meaningful.</span></p></div></Reveal>
    <div className="research-strip" id="research"><p className="eyebrow">A SPIRIT OF DISCOVERY</p><p>Every breakthrough begins<br />with a better question.</p><span>Explore AI, data and technology<br />through the topics above.<br /><small>Concept themes, not verified KIU research projects.</small></span></div>
  </div></section>;
}
