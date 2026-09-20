import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "./motion";

export function About() {
  return (
    <section
      className="about section-pad"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="shell">
        <Reveal className="about-layout">
          <div>
            <p className="eyebrow">
              <span className="section-index">01 /</span> A DIFFERENT KIND OF
              BEGINNING
            </p>
            <span className="about-location">
              <MapPin size={14} /> Kutaisi, Georgia
            </span>
          </div>
          <div>
            <h2 id="about-title">
              Rooted in nature.
              <br />
              Connected to the world.
              <br />
              <span className="muted">Made for what’s next.</span>
            </h2>
            <div className="about-bottom">
              <p>
                Kutaisi International University is a modern international
                university in Kutaisi, Georgia. A place where education and
                ambition meet, with nature as the backdrop.
              </p>
              <a className="text-link" href="#campus">
                Get to know the campus <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function StudentLife() {
  return (
    <section
      className="student-life"
      id="student-life"
      aria-labelledby="life-title"
    >
      <Image
        src="/images/students.webp"
        alt="Students sharing a study session at KIU"
        fill
        sizes="100vw"
      />
      <div className="life-shade" />
      <Reveal className="shell life-content">
        <p className="eyebrow">
          <span className="section-index">05 /</span> THE DAYS YOU’LL REMEMBER
        </p>
        <h2 id="life-title">
          More than your degree.
          <br />
          <span>Your next chapter.</span>
        </h2>
        <p>
          The people you meet. The ideas you share.
          <br />
          The person you become along the way.
        </p>
        <a className="text-link light-link" href="#campus">
          Find your place <ArrowRight size={18} />
        </a>
      </Reveal>
      <span className="life-caption">LIFE, IN GOOD COMPANY.</span>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="cta section-pad" id="apply" aria-labelledby="cta-title">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">YOUR NEXT CHAPTER IS WAITING</p>
          <h2 id="cta-title">
            Your future
            <br />
            <span>starts here.</span>
          </h2>
          <div className="actions">
            <a className="button button-light" href="#programs">
              Explore Programs <ArrowRight size={18} />
            </a>
            <a
              className="button button-outline"
              href="https://www.kiu.edu.ge/eng"
              target="_blank"
              rel="noreferrer"
            >
              Apply to KIU <ArrowUpRight size={18} />
            </a>
          </div>
          <p className="cta-note">
            Continue to the official KIU website for admissions information.
          </p>
        </Reveal>
        <div className="cta-monogram" aria-hidden="true">
          kiu.
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <a className="footer-brand" href="#home">
            KIU
            <span>
              Kutaisi International University
              <br />
              Independent portfolio concept
            </span>
          </a>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#campus">Campus</a>
            <a
              href="https://www.kiu.edu.ge/eng"
              target="_blank"
              rel="noreferrer"
            >
              Official KIU website <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} KIU Concept. Designed as a vision of
            possibility.
          </p>
          <p>Not affiliated with or endorsed by KIU.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
