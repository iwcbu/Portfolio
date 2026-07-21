"use client";

import { profile } from "../../data/profile";
import { projects } from "../../data/projects";
import type { Project } from "../../types/portfolio";
import { AboutPanel } from "./AboutPanel";
import { ContactPanel } from "./ContactPanel";
import { IntroPanel } from "./IntroPanel";

type Props = {
  selectedProject: Project | null;
  onSelectProject: (project: Project) => void;
  onReturn: () => void;
};

export function PortfolioInterface({ selectedProject, onSelectProject, onReturn }: Props) {
  return (
    <main className="journey-content">
      <section className="journey-section hero-section" id="universe" aria-labelledby="hero-title">
        <div className="content-lock hero-content">
          <p className="eyebrow">Portfolio · signal 001</p>
          <h1 id="hero-title">IAN CAMPBELL</h1>
          <p className="hero-role">Software Engineer & Data Developer</p>
          <p className="hero-statement">Aiming to develop products that make a difference.</p>
          <div className="scroll-prompt" aria-hidden="true">
            <span>Scroll to begin the journey</span>
            <i />
          </div>
        </div>
        <span className="coordinate coordinate-left">RA 17h 45m 40s</span>
        <span className="coordinate coordinate-right">DEC −29° 00′ 28″</span>
      </section>

      <section className="journey-section" id="galaxy" aria-label="Introduction and skills">
        <div className="content-lock align-left"><IntroPanel /></div>
      </section>

      <section className="journey-section projects-section" id="projects" aria-labelledby="projects-title">
        <div className="content-lock projects-interface">
          <div className="projects-heading">
            <p className="eyebrow">Checkpoint 02 · project system</p>
            <h2 id="projects-title">Selected Work</h2>
            <p>Select a planet to inspect its placeholder case study.</p>
          </div>
          <div className="project-index" aria-label="Project index">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={selectedProject?.id === project.id ? "is-selected" : ""}
                onClick={() => onSelectProject(project)}
                aria-pressed={selectedProject?.id === project.id}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{project.title}</strong>
                <small>{project.technologies.slice(0, 2).join(" / ")}</small>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section" id="earth" aria-label="About me">
        <div className="content-lock align-right"><AboutPanel /></div>
      </section>

      <section className="journey-section contact-section" id="contact" aria-label="Contact">
        <div className="content-lock align-left"><ContactPanel onReturn={onReturn} /></div>
      </section>
    </main>
  );
}
