import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { experience, externalLinks, profile, projects, skills } from "../../data/portfolio";
import Reveal from "./Reveal";
import TransformerVisualizer from "./TransformerVisualizer";

const navigation = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const ExternalArrow = () => <ArrowUpRight aria-hidden="true" className="h-4 w-4" />;

const PortfolioPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionReady, setMotionReady] = useState(false);

  useEffect(() => setMotionReady(true), []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={`portfolio-shell ${motionReady ? "motion-ready" : ""}`}>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="wordmark" href="#top" onClick={closeMenu}>
            <span aria-hidden="true">SM</span>
            <span>{profile.shortName}</span>
          </a>
          <div className="desktop-nav">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>
          <a className="nav-cta" href={`mailto:${profile.email}`}>Let&apos;s talk <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
          <button
            type="button"
            className="menu-trigger"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Open"} navigation</span>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>
        {menuOpen && (
          <div id="mobile-navigation" className="mobile-nav">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a href={`mailto:${profile.email}`} onClick={closeMenu}>Email Saksham</a>
          </div>
        )}
      </header>

      <div id="content">
        <section id="top" className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">New Delhi, India · Available for opportunities</p>
            <h1 id="hero-title">Software Engineer <span>for data platforms and applied AI.</span></h1>
            <p className="hero-intro">I build dependable systems where the hard parts matter: data platforms that make complexity usable, real-time products that hold up under pressure, and applied AI that earns its place in the workflow.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight aria-hidden="true" className="h-5 w-5" /></a>
              <a className="button button-secondary" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight aria-hidden="true" className="h-5 w-5" /></a>
            </div>
          </div>
          <aside className="hero-proof" aria-label="Career highlights">
            <p className="proof-label">Currently</p>
            <p className="proof-statement">{experience[0].role}</p>
            <div className="proof-rule" />
            <div className="proof-stat"><strong>34,000+</strong><span>Azure Data Lake tables documented</span></div>
            <div className="proof-stat"><strong>1,100+</strong><span>algorithmic problems solved</span></div>
            <p className="proof-footnote">NSUT · B.Tech, Instrumentation &amp; Control Engineering</p>
          </aside>
        </section>

        <section id="work" className="content-section work-section" aria-labelledby="work-heading">
          <Reveal className="section-intro">
            <p className="eyebrow">01 — Selected work</p>
            <h2 id="work-heading">Systems with an observable outcome.</h2>
            <p>Not experiments for a slide deck—work that makes the contribution, the engineering choices, and the result visible.</p>
          </Reveal>
          <div className="project-list">
            {projects.map((project, index) => (
              <Reveal key={project.name} className={`project-reveal project-reveal-${index + 1}`} delay={index * 90}>
              <article className={`project-card project-card-${index + 1}`}>
                <div className="project-index">0{index + 1}</div>
                <div className="project-body">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.name === "Transformer From Scratch" && <TransformerVisualizer />}
                  <dl className="project-proof">
                    <div><dt>Contribution</dt><dd>{project.contribution}</dd></div>
                    <div><dt>Outcome</dt><dd>{project.outcome}</dd></div>
                  </dl>
                  <ul className="tag-list" aria-label={`${project.name} technology stack`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="project-links">
                    {project.repository && <a href={project.repository} target="_blank" rel="noreferrer">Source <ExternalArrow /></a>}
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live product <ExternalArrow /></a>}
                  </div>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section experience-section" aria-labelledby="experience-heading">
          <Reveal className="section-intro split-intro">
            <p className="eyebrow">02 — Experience</p>
            <h2 id="experience-heading">Where I&apos;ve built.</h2>
          </Reveal>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={item.company} className="experience-item">
                <div className="experience-meta"><p>{item.period}</p><p>{item.location}</p></div>
                <div>
                  <p className="experience-company">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p className="experience-summary">{item.summary}</p>
                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <ul className="tag-list" aria-label={`${item.company} technologies`}>
                    {item.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="athlete-note">
            <p className="eyebrow">Beyond engineering</p>
            <div className="athlete-copy">
              <p><strong>Team India, U-19 Roller Hockey</strong> — World Roller Games, Barcelona 2019. Competitive sport taught me to prepare deeply, communicate under pressure, and turn team strategy into execution.</p>
              <p className="athlete-detail">The same mindset I bring to engineering: read the system, make the next move count, and help the team execute when the stakes are real.</p>
            </div>
            <figure className="athlete-film">
              <video
                aria-label="Team India roller hockey highlight"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/roller-hockey.jpg"
                src="/roller-hockey.mp4"
              />
              <figcaption>World Roller Games · Barcelona, 2019</figcaption>
            </figure>
          </div>
        </section>

        <section id="skills" className="content-section skills-section" aria-labelledby="skills-heading">
          <Reveal className="section-intro">
            <p className="eyebrow">03 — Capabilities</p>
            <h2 id="skills-heading">Tools follow the problem.</h2>
          </Reveal>
          <div className="capability-grid">
            {skills.map((skill) => (
              <article key={skill.title} className="capability">
                <h3>{skill.title}</h3>
                <p>{skill.detail}</p>
              </article>
            ))}
          </div>
          <div className="competitive-links">
            <p><strong>1,100+ problems solved</strong> across Codeforces and LeetCode; max Codeforces rating 1431.</p>
            <div>
              <a href={externalLinks.codeforces} target="_blank" rel="noreferrer">Codeforces <ExternalArrow /></a>
              <a href={externalLinks.leetcode} target="_blank" rel="noreferrer">LeetCode <ExternalArrow /></a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
          <Reveal>
            <p className="eyebrow">04 — Contact</p>
            <h2 id="contact-heading">Bring me the problem that cannot be average.</h2>
          </Reveal>
          <div className="contact-links">
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight aria-hidden="true" /></a>
            <a href={externalLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
            <a href={externalLinks.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub profile</a>
            <a href={`mailto:${profile.email}`}><Mail aria-hidden="true" /> Email</a>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed and built with React + TypeScript.</span>
      </footer>
    </main>
  );
};

export default PortfolioPage;
