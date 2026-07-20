export type PortfolioSectionId =
  | "universe"
  | "galaxy"
  | "projects"
  | "earth"
  | "contact";

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  color: string;
  accent: string;
  size: number;
};

export type CameraCheckpoint = {
  id: PortfolioSectionId;
  label: string;
  start: number;
  end: number;
  position: [number, number, number];
  target: [number, number, number];
};
