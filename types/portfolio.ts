export type PortfolioSectionId =
  | "universe"
  | "galaxy"
  | "projects"
  | "earth"
  | "intermediate"
  | "contact";

export type Project = {
  id: string;
  title: string;
  nickname: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
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
