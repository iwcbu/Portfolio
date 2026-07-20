"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { experienceConfig } from "../../config/experienceConfig";
import type { Project } from "../../types/portfolio";
import { StarField } from "../environment/StarField";
import { EarthScene } from "../scenes/EarthScene";
import { GalaxyScene } from "../scenes/GalaxyScene";
import { HouseScene } from "../scenes/HouseScene";
import { SolarSystemScene } from "../scenes/SolarSystemScene";
import { UniverseScene } from "../scenes/UniverseScene";
import { CameraJourney } from "./CameraJourney";

type Props = {
  progress: number;
  selectedProject: Project | null;
  reducedMotion: boolean;
  lowPower: boolean;
  onSelectProject: (project: Project) => void;
  onReady: () => void;
};

export function PortfolioCanvas({
  progress,
  selectedProject,
  reducedMotion,
  lowPower,
  onSelectProject,
  onReady,
}: Props) {
  return (
    <Canvas
      className="portfolio-canvas"
      dpr={lowPower ? experienceConfig.mobileDpr : experienceConfig.desktopDpr}
      camera={{ fov: lowPower ? 52 : 46, near: 0.1, far: 260, position: [0, 0.5, 18] }}
      gl={{ antialias: !lowPower, alpha: false, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor("#030608");
        onReady();
      }}
    >
      <fog attach="fog" args={["#030608", 28, 105]} />
      <ambientLight intensity={0.16} color="#9fc5cd" />
      <directionalLight position={[10, 12, 8]} intensity={0.75} color="#d3e5df" />
      <Suspense fallback={null}>
        <StarField count={lowPower ? experienceConfig.mobileStars : experienceConfig.desktopStars} reducedMotion={reducedMotion} />
        <UniverseScene reducedMotion={reducedMotion} />
        <GalaxyScene reducedMotion={reducedMotion} lowPower={lowPower} />
        <SolarSystemScene
          selectedProject={selectedProject}
          reducedMotion={reducedMotion}
          onSelectProject={onSelectProject}
        />
        <EarthScene reducedMotion={reducedMotion} />
        <HouseScene />
        <CameraJourney progress={progress} reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}
