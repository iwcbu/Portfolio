"use client";

import { navigation } from "../../data/navigation";
import { profile } from "../../data/profile";
import type { PortfolioSectionId } from "../../types/portfolio";

type Props = {
  activeSection: PortfolioSectionId;
  onNavigate: (id: PortfolioSectionId) => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function MissionNavigation({ activeSection, onNavigate, onPrevious, onNext }: Props) {
  return (
    <header className="mission-navigation">
      <button className="mission-mark" onClick={() => onNavigate("universe")} aria-label="Return to beginning">
        <span aria-hidden="true">YN</span>
        <strong>PORTFOLIO / FLIGHT 001</strong>
      </button>
      <nav aria-label="Portfolio journey">
        {navigation.map((item) => (
          <button
            key={item.id}
            className={activeSection === item.id ? "is-active" : ""}
            onClick={() => onNavigate(item.id)}
            aria-current={activeSection === item.id ? "location" : undefined}
          >
            <span>{item.code}</span>{item.label}
          </button>
        ))}
      </nav>
      <div className="mission-actions">
        <a href={profile.resumeUrl}>Résumé <span>placeholder</span></a>
        <button onClick={() => onNavigate("contact")}>Skip journey</button>
      </div>
      <div className="step-controls" aria-label="Section controls">
        <button onClick={onPrevious} aria-label="Previous section">←</button>
        <button onClick={onNext} aria-label="Next section">→</button>
      </div>
    </header>
  );
}
