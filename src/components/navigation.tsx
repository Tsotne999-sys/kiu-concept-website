"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMediaQuery } from "@/lib/use-media-query";
const links = [
  ["About", "about"],
  ["Programs", "programs"],
  ["Campus", "campus"],
  ["Research", "research"],
  ["Student Life", "student-life"],
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const mobile = useMediaQuery("(max-width: 980px)");
  const toggle = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 35);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    for (const id of [
      "home",
      "about",
      "programs",
      "computer-science",
      "campus",
      "research",
      "student-life",
      "apply",
    ]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => {
      window.removeEventListener("scroll", scroll);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth > 980) setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <header
      className={`navigation ${scrolled || open ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <a
        href="#home"
        className="brand"
        aria-label="KIU concept home"
        onClick={() => setOpen(false)}
      >
        <span className="brand-symbol" aria-hidden="true">
          k
        </span>
        <span>
          KIU
          <span className="brand-caption">
            KUTAISI INTERNATIONAL
            <br />
            UNIVERSITY
          </span>
        </span>
      </a>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        <span className="menu-line" />
        <span className="menu-line" />
      </button>
      <button
        className="menu-backdrop"
        aria-label="Close navigation backdrop"
        tabIndex={-1}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
      <nav
        id="primary-navigation"
        aria-label="Main navigation"
        inert={mobile && !open}
        className={open ? "nav-links is-open" : "nav-links"}
      >
        {links.map(([title, id], index) => (
          <a
            key={id}
            href={`#${id}`}
            style={{ "--nav-index": index } as CSSProperties}
            aria-current={active === id ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            <span>{title}</span>
          </a>
        ))}
        <a
          href="#apply"
          className="nav-apply"
          style={{ "--nav-index": 5 } as CSSProperties}
          onClick={() => setOpen(false)}
        >
          Apply <ArrowUpRight size={16} />
        </a>
      </nav>
      <motion.div
        className="reading-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
    </header>
  );
}
