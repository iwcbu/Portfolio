"use client";

export function SectionProgress({ progress }: { progress: number }) {
  return (
    <div className="section-progress" aria-label={`Journey progress ${Math.round(progress * 100)} percent`}>
      <span className="progress-value">{String(Math.round(progress * 100)).padStart(3, "0")}</span>
      <div className="progress-rail"><span style={{ transform: `scaleX(${progress})` }} /></div>
      <span>%</span>
    </div>
  );
}
