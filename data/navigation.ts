import type { PortfolioSectionId } from "../types/portfolio";

export const navigation: { id: PortfolioSectionId; label: string; code: string }[] = [
  { id: "universe", label: "Home", code: "00" },
  { id: "galaxy", label: "Intro", code: "01" },
  { id: "projects", label: "Projects", code: "02" },
  { id: "earth", label: "About", code: "03" },
  { id: "contact", label: "Contact", code: "04" },
];
