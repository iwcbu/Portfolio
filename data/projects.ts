import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "project-one",
    title: "MyChessBot",
    nickname: "MyChessBot",
    shortDescription:
      "A full-stack chess application powered by a custom engine using minimax and alpha-beta pruning.",
    longDescription:
      "MyChessBot is a full-stack chess platform built around a custom Python engine with multiple difficulty levels, ranging from greedy move selection to minimax search with alpha-beta pruning. A FastAPI backend exposes the engine to a React interface, while AWS services support the application's deployment and delivery. The project focuses on reducing redundant search so players receive stronger moves without long processing delays.",
    technologies: ["Python", "React", "FastAPI", "AWS"],
    githubUrl: "https://github.com/iwcbu/Chess-bot",
    liveUrl: null,
    featured: true,
    color: "#d56a3a",
    accent: "#ffb06f",
    size: 1.15,
  },
  {
    id: "project-two",
    title: "Refilla",
    nickname: "Refilla",
    shortDescription:
      "A mobile application that helps users find nearby public water bottle refill stations.",
    longDescription:
      "Refilla addresses the difficulty of finding free drinking-water refill points while away from home. The React Native application presents station information through a mobile-friendly experience, while Supabase and PostgreSQL provide its persistent data layer. The project was designed to make reusable water bottles more practical and reduce reliance on single-use plastic.",
    technologies: [ "TypeScript", "React Native", "Expo", "Supabase", "PostgreSQL", ],
    githubUrl: "https://github.com/iwcbu/Refilla",
    liveUrl: null,
    featured: false,
    color: "#6888a2",
    accent: "#b7d4df",
    size: 1.25,
  },
  {
    id: "project-three",
    title: "Boston University Rent Estimator",
    nickname: "BURE",
    shortDescription:
      "A rent-estimation web app using localized linear regression models trained on scraped Boston apartment listings.",
    longDescription:
      "BURE helps Boston University students estimate off-campus rent using real apartment-market data. The project scraped and cleaned thousands of Apartments.com listings, engineered structural and amenity features, and trained interpretable linear regression models using correlation-based feature selection. Neighborhood-specific models substantially improved predictive performance over a single citywide model, and an early Django interface was built to expose the estimates.",
    technologies: [
      "Python",
      "pandas",
      "scikit-learn",
      "BeautifulSoup",
      "Django",
    ],
    githubUrl: "https://github.com/iwcbu/BURE",
    liveUrl: "https://bure-inky.vercel.app",
    featured: false,
    color: "#8b6d9d",
    accent: "#d8b9e9",
    size: 1.2,
  },
  {
    id: "project-four",
    title: "BMW Inventory Automation Tool",
    nickname: "BMW IAT",
    shortDescription:
      "A Python automation tool that transfers newly listed dealership inventory into an existing Excel addendum template.",
    longDescription:
      "The BMW Inventory Automation Tool replaces a repetitive dealership workflow that required newly listed vehicles to be copied manually into an Excel addendum. The Python pipeline collects inventory data from the dealership website, standardizes the fields with pandas, and writes them into the existing workbook format. This reduces duplicate data entry and improves the speed and consistency of inventory updates.",
    technologies: ["Python", "pandas", "openpyxl", "Web Scraping"],
    githubUrl: null,
    liveUrl:
      "https://drive.google.com/file/d/1fO27L-b8XJBEVr_YJRDPNco05l6OKBMK/view?usp=sharing",
    featured: false,
    color: "#54765e",
    accent: "#a9c88f",
    size: 0.95,
  },
  {
    id: "project-five",
    title: "Partout",
    nickname: "Partout",
    shortDescription:
      "A full-stack automotive marketplace for managing garages, listing parts, negotiating offers, and connecting with other drivers.",
    longDescription:
      "Partout is a Django marketplace designed for automotive enthusiasts to buy and sell parts while building a community around their vehicles. Users can create authenticated profiles, manage a personal garage, publish and filter listings, submit offers, exchange direct messages, and interact through follows, likes, saved listings, and ratings. Django's ORM and class-based views manage the application's marketplace, authentication, and social data.",
    technologies: ["Python", "Django", "SQLite", "HTML", "CSS"],
    githubUrl: "https://github.com/iwcbu/Partout",
    liveUrl: 'https://partout-6401.onrender.com/partout/',
    featured: false,
    color: "#a88545",
    accent: "#e3c778",
    size: .95,
  },
];