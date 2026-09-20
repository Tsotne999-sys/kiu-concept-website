"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [["About", "about"], ["Programs", "programs"], ["Campus", "campus"], ["Research", "research"], ["Student Life", "student-life"]];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 35);
    scroll(); window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } };
    const resize = () => { if (window.innerWidth > 980) setOpen(false); };
    window.addEventListener("keydown", close); window.addEventListener("resize", resize);
    return () => { window.removeEventListener("keydown", close); window.removeEventListener("resize", resize); };
  }, [open]);
  return <header className={`navigation ${scrolled || open ? "is-scrolled" : ""}`}>
    <a href="#home" className="brand" aria-label="KIU concept home" onClick={() => setOpen(false)}><span className="brand-symbol" aria-hidden="true">k</span><span>KIU<span className="brand-caption">KUTAISI INTERNATIONAL<br />UNIVERSITY</span></span></a>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="primary-navigation" aria-label="Main navigation" className={open ? "nav-links is-open" : "nav-links"}>
      {links.map(([title, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{title}</a>)}
      <a href="#apply" className="nav-apply" onClick={() => setOpen(false)}>Apply <ArrowUpRight size={16} /></a>
    </nav>
  </header>;
}
