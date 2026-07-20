"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import { projects } from "../../data/projects";
import type { Project } from "../../types/portfolio";
import { ProjectPlanet } from "../projects/ProjectPlanet";

type Props = {
  selectedProject: Project | null;
  reducedMotion: boolean;
  onSelectProject: (project: Project) => void;
};

export function SolarSystemScene({ selectedProject, reducedMotion, onSelectProject }: Props) {
  const sun = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (sun.current && !reducedMotion) sun.current.rotation.y += delta * 0.04;
  });

  return (
    <group position={[0, 0, -88]}>
      <pointLight color="#ffd18b" intensity={70} distance={34} decay={2} />
      <mesh ref={sun}>
        <sphereGeometry args={[2.5, 32, 24]} />
        <meshStandardMaterial color="#e7a44e" emissive="#f0a948" emissiveIntensity={2.2} />
      </mesh>
      {projects.map((project, index) => (
        <ProjectPlanet
          key={project.id}
          project={project}
          index={index}
          selected={selectedProject?.id === project.id}
          systemFocused={selectedProject !== null}
          reducedMotion={reducedMotion}
          onSelect={onSelectProject}
        />
      ))}
    </group>
  );
}
