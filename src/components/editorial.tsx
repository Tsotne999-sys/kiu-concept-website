import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Reveal, TextReveal } from "./motion";

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
              <TextReveal
                lines={[
                  { text: "Rooted in nature." },
                  { text: "Connected to the world." },
                  { text: "Made for what’s next.", className: "muted" },
                ]}
              />
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

export function CallToAction() {
  return (
    <section className="cta section-pad" id="apply" aria-labelledby="cta-title">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">YOUR NEXT CHAPTER IS WAITING</p>
          <h2 id="cta-title">
            <TextReveal
              lines={[
                { text: "Your future" },
                { text: "starts here.", className: "cta-title-accent" },
              ]}
            />
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
