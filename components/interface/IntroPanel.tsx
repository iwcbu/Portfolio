import { profile } from "../../data/profile";
import { technologies } from "../../data/technologies";

export function IntroPanel() {
  return (
    <div className="interface-panel intro-panel">
      <div className="panel-coordinate">CHECKPOINT 01 / GALACTIC PLANE</div>
      <p className="eyebrow">Signal acquired · introduction</p>
      <h2>Hello, I’m {profile.name}.</h2>
      <p className="panel-lede">{profile.introduction}</p>
      <p>{profile.personalNote}</p>
      <div className="skills-grid">
        {technologies.map((group, index) => (
          <section key={group.category} aria-labelledby={`skill-${index}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3 id={`skill-${index}`}>{group.category}</h3>
            <p>{group.items.join(" · ")}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
