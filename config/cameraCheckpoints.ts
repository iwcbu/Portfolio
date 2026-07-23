import type { CameraCheckpoint } from "../types/portfolio";

// CAMERA TUNING: All positions live here so the journey can be retimed safely.
export const cameraCheckpoints: CameraCheckpoint[] = [
  {
    id: "universe",
    label: "Deep Space",
    start: 0,
    end: 0.3,
    position: [0, 0.5, 18],
    target: [0, 0, 0],
  },
  {
    id: "galaxy",
    label: "Milky Way",
    start: 0.3,
    end: 0.5,
    position: [7, 3, -23],
    target: [0, 0, -43],
  },
  {
    id: "projects",
    label: "Project System",
    start: 0.5,
    end: 0.71,
    position: [-20, 10, -55],
    target: [-5, -1, -80],
  },
  {
    id: "earth",
    label: "Earth Approach",
    start: 0.71,
    end: 0.85,
    position: [0, 1, -101],
    target: [0, -2, -150],
  },
  {
    id: "intermediate",
    label: "Entering Atmosphere",
    start: 0.85,
    end: 0.98,
    position: [0, 3, -130],
    target: [0, -3, -204],
  },
  {
    id: "contact",
    label: "Home Signal",
    start: 0.98,
    end: 1,
    position: [15, 7, -187],
    target: [-20, 0, -204],
  },
];
