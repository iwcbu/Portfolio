import type { CameraCheckpoint } from "../types/portfolio";

// CAMERA TUNING: All positions live here so the journey can be retimed safely.
export const cameraCheckpoints: CameraCheckpoint[] = [
  {
    id: "universe",
    label: "Deep Space",
    start: 0,
    end: 0.16,
    position: [0, 0.5, 18],
    target: [0, 0, 0],
  },
  {
    id: "galaxy",
    label: "Milky Way",
    start: 0.16,
    end: 0.37,
    position: [7, 3, -23],
    target: [0, 0, -43],
  },
  {
    id: "projects",
    label: "Project System",
    start: 0.37,
    end: 0.61,
    position: [0, 8, -64],
    target: [0, 0, -88],
  },
  {
    id: "earth",
    label: "Earth Approach",
    start: 0.61,
    end: 0.82,
    position: [0, 2, -111],
    target: [0, -1, -130],
  },
  {
    id: "contact",
    label: "Home Signal",
    start: 0.82,
    end: 1,
    position: [9, 6, -147],
    target: [0, 0, -164],
  },
];
