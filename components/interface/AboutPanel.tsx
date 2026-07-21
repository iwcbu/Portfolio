import { profile } from "../../data/profile";

const futureMarkers = ["BOSTON", "Ocean / surfing", "Mountains / skiing", "Motorsports", "Space" ];

export function AboutPanel() {
  return (
    <div className="interface-panel about-panel">
      <div className="panel-coordinate">CHECKPOINT 03 / 40.7128° N</div>
      <p className="eyebrow">Atmospheric entry · about</p>
      <h2>About Me</h2>

      {/* TO DO: ABOUT SECTION TEXT */}
      <p className="panel-lede"> ---- ABOUT SECTION PLACE HOLDER ---- </p>
      <p>I am most engaged when I am learning something new, solving a difficult problem, or turning an idea into something useful.</p>
      <div className="future-markers">
        <span>Future environment coordinates</span>
        <ul>
          {futureMarkers.map((marker) => <li key={marker}>{marker}</li>)}
        </ul>
      </div>
    </div>
  );
}
