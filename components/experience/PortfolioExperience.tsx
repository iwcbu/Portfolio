"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { cameraCheckpoints } from "../../config/cameraCheckpoints";
import { navigation } from "../../data/navigation";
import { useDevicePerformance } from "../../hooks/useDevicePerformance";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import type { PortfolioSectionId, Project } from "../../types/portfolio";
import { MissionNavigation } from "../interface/MissionNavigation";
import { PortfolioInterface } from "../interface/PortfolioInterface";
import { SectionProgress } from "../interface/SectionProgress";
import { ProjectPanel } from "../projects/ProjectPanel";
import { ExperienceErrorBoundary } from "./ExperienceErrorBoundary";
import { ExperienceFallback } from "./ExperienceFallback";
import { ExperienceLoader } from "./ExperienceLoader";
import { PortfolioCanvas } from "./PortfolioCanvas";

export function PortfolioExperience() {
  const [progress, setProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null);
  const [canvasReady, setCanvasReady] = useState(false);
  const reducedMotion = useReducedMotion();
  const lowPower = useDevicePerformance();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const canvas = document.createElement("canvas");
        setWebglAvailable(Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl")));
      } catch {
        setWebglAvailable(false);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setProgress(Math.min(1, Math.max(0, window.scrollY / scrollable)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const activeSection = useMemo(() => {
    const checkpoint = cameraCheckpoints.find((item) => progress <= item.end);
    return checkpoint?.id ?? "contact";
  }, [progress]);

  const navigate = useCallback((id: PortfolioSectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  }, [reducedMotion]);

  const moveSection = useCallback((direction: -1 | 1) => {
    const current = navigation.findIndex((item) => item.id === activeSection);
    const next = Math.min(navigation.length - 1, Math.max(0, current + direction));
    navigate(navigation[next].id);
  }, [activeSection, navigate]);

  const closeProject = useCallback(() => setSelectedProject(null), []);
  const disableWebgl = useCallback(() => {
    setWebglAvailable(false);
    setCanvasReady(true);
  }, []);

  return (
    <div className={`portfolio-shell ${reducedMotion ? "reduced-motion" : ""} ${webglAvailable === false ? "fallback-mode" : ""}`}>
      <a className="skip-link" href="#galaxy">Skip to portfolio content</a>
      <div className="experience-layer" aria-hidden="true">
        {webglAvailable && (
          <ExperienceErrorBoundary onError={disableWebgl}>
            <PortfolioCanvas
              progress={progress}
              selectedProject={selectedProject}
              reducedMotion={reducedMotion}
              lowPower={lowPower}
              onSelectProject={setSelectedProject}
              onReady={() => setCanvasReady(true)}
            />
          </ExperienceErrorBoundary>
        )}
        <div className="scan-grid" />
      </div>
      {webglAvailable === false && <ExperienceFallback />}
      <ExperienceLoader visible={webglAvailable === null || (webglAvailable && !canvasReady)} />
      <MissionNavigation
        activeSection={activeSection}
        onNavigate={navigate}
        onPrevious={() => moveSection(-1)}
        onNext={() => moveSection(1)}
      />
      <div className="mission-status" aria-live="polite">
        <span>LOC</span>
        <strong>{cameraCheckpoints.find((item) => item.id === activeSection)?.label}</strong>
        <i className={webglAvailable ? "online" : "safe"} />
      </div>
      <SectionProgress progress={progress} />
      <PortfolioInterface
        selectedProject={selectedProject}
        onSelectProject={setSelectedProject}
        onReturn={() => navigate("universe")}
      />
      {selectedProject && <ProjectPanel project={selectedProject} onClose={closeProject} />}
      <div className="noise" aria-hidden="true" />
    </div>
  );
}
