import { profile } from "../../data/profile";

const futureMarkers = ["Hometown / city", "Ocean / surfing", "Mountains / skiing", "Motorsports", "Telescope / space"];

export function AboutPanel() {
  return (
    <div className="interface-panel about-panel">
      <div className="panel-coordinate">CHECKPOINT 03 / 40.7128° N</div>
      <p className="eyebrow">Atmospheric entry · about</p>
      <h2>About Me</h2>
      <p className="panel-lede">{profile.about}</p>
      <p>{profile.aboutClosing}</p>
      <div className="future-markers">
        <span>Future environment coordinates</span>
        <ul>
          {futureMarkers.map((marker) => <li key={marker}>{marker}</li>)}
        </ul>
      </div>
    </div>
  );
}
