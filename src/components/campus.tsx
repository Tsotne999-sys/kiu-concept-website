"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { campusSpaces } from "@/lib/content";
import { Reveal } from "./motion";
import { DetailDialog } from "./detail-dialog";

export function Campus() {
  const [selected, setSelected] = useState<number | null>(null);
  const space = selected === null ? null : campusSpaces[selected];
  return <section className="campus section-pad" id="campus" aria-labelledby="campus-title"><div className="shell">
    <Reveal className="section-heading"><div><p className="eyebrow"><span className="section-index">04 /</span> MORE THAN A PLACE TO STUDY</p><h2 id="campus-title">A campus.<br /><span className="muted">A world of your own.</span></h2></div><p className="section-intro">Space to focus. Room to grow.<br />And a little nature in between.</p></Reveal>
    <div className="campus-grid">{campusSpaces.map((s, i) => <Reveal key={s.title} className={`campus-cell campus-cell-${i}`} delay={(i % 3) * .06}><button className="campus-card" onClick={() => setSelected(i)} aria-label={`View ${s.title}`}><Image src={s.image} alt={s.alt} fill sizes={i === 0 || i === 5 ? "(max-width: 640px) 100vw, 60vw" : "(max-width: 640px) 100vw, 35vw"} /><span className="campus-shade" />{s.placeholder && <span className="image-note">ILLUSTRATIVE IMAGE</span>}<span className="campus-card-label"><span><small>{s.category}</small><strong>{s.title}</strong></span><span className="campus-arrow"><ArrowUpRight size={21} /></span></span></button></Reveal>)}</div>
    <p className="small-note campus-note">A visual campus concept. Sports and gym photography is illustrative.</p>
    <DetailDialog open={space !== null} onClose={() => setSelected(null)} title={space?.title ?? ""}>{space && <><div className="dialog-photo"><Image src={space.image} alt={space.alt} width={1000} height={650} /></div><p>{space.text}</p><div className="gallery-controls"><button aria-label="Previous campus space" onClick={() => setSelected(((selected ?? 0) + campusSpaces.length - 1) % campusSpaces.length)}><ArrowLeft size={18} /></button><span>{(selected ?? 0) + 1} / {campusSpaces.length}</span><button aria-label="Next campus space" onClick={() => setSelected(((selected ?? 0) + 1) % campusSpaces.length)}><ArrowRight size={18} /></button></div></>}</DetailDialog>
  </div></section>;
}
