import type { PortfolioSectionId } from "../types/portfolio";
import { integer } from 'drizzle-orm/sqlite-core';

export const navigation: { id: PortfolioSectionId; label: string; code: string; scrollProgress: number; }[] = [
  { id: "universe", label: "Home", code: "00", scrollProgress: 0 },
  { id: "galaxy", label: "Intro", code: "01", scrollProgress: 0.18 },
  { id: "projects", label: "Projects", code: "02", scrollProgress: 0.4 },
  { id: "earth", label: "About", code: "03", scrollProgress: 0.7 },
  { id: "contact", label: "Contact", code: "04", scrollProgress: 1 },
];
