"use client";

import { useEffect, useRef } from "react";
import type { Project } from "../../types/portfolio";
import { projects } from '../../data/projects';

export function ProjectPanel({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <aside className="project-panel" role="dialog" aria-modal="false" aria-labelledby="project-panel-title">
      <div className="panel-coordinate">TARGET LOCK / {project.id.toUpperCase()}</div>
      <button ref={closeRef} className="panel-close" onClick={onClose} aria-label="Close project details">
        Close <span aria-hidden="true">×</span>
      </button>
      <h2 id="project-panel-title">{project.title}</h2>
      <p className="project-lede">{project.shortDescription}</p>
      <p>{project.longDescription}</p>
      <ul className="tag-list" aria-label="Technologies">
        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      <div className="panel-actions">
        { project.githubUrl && <a href={project.githubUrl}>GitHub <small>{project.githubUrl}</small></a> }
        { project.liveUrl && <a href={project.liveUrl}>Live demo <small>{project.nickname}</small></a> }
      </div>
      <p className="panel-hint">Press Escape or use Close to return to the system.</p>
    </aside>
  );
}
