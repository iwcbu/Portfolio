"use client";

export function ExperienceLoader({ visible }: { visible: boolean }) {
  return (
    <div className={`experience-loader ${visible ? "is-visible" : ""}`} aria-live="polite" aria-hidden={!visible}>
      <div className="loader-reticle" aria-hidden="true" />
      <p className="eyebrow">Initializing flight path</p>
      <strong>CALIBRATING DEEP-SPACE ARRAY</strong>
      <div className="loader-track"><span /></div>
      <small>Loading lightweight geometry and navigation data</small>
    </div>
  );
}
