"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";
import type { Project } from "../../types/portfolio";

type Props = {
  project: Project;
  index: number;
  selected: boolean;
  systemFocused: boolean;
  reducedMotion: boolean;
  onSelect: (project: Project) => void;
};

export function ProjectPlanet({ project, index, selected, systemFocused, reducedMotion, onSelect }: Props) {
  const orbitRef = useRef<Group>(null);
  const planetRef = useRef<Mesh>(null);
  const distance = 5.2 + index * 2.35;
  const speed = 0.055 - index * 0.006;
  const startAngle = index * 1.38;

  useFrame((_, delta) => {
    if (orbitRef.current && !reducedMotion) orbitRef.current.rotation.y += delta * speed;
    if (planetRef.current && !reducedMotion) planetRef.current.rotation.y += delta * 0.18;
  });

  return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[distance - 0.018, distance + 0.018, 96]} />
        <meshBasicMaterial color="#6f8c98" transparent opacity={systemFocused ? 0.08 : 0.2} />
      </mesh>
      <group ref={orbitRef} rotation={[0, startAngle, 0]}>
        <group position={[distance, 0, 0]} scale={selected ? 1.35 : 1}>
          <mesh
            ref={planetRef}
            castShadow
            onClick={(event) => {
              event.stopPropagation();
              onSelect(project);
            }}
            onPointerOver={() => {
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              document.body.style.cursor = "default";
            }}
          >
            <sphereGeometry args={[project.size, 20, 16]} />
            <meshStandardMaterial
              color={project.color}
              emissive={selected ? project.accent : "#000000"}
              emissiveIntensity={selected ? 0.34 : 0}
              roughness={0.78}
              metalness={0.08}
              transparent
              opacity={systemFocused && !selected ? 0.36 : 1}
            />
          </mesh>
          <Html center distanceFactor={10} style={{ pointerEvents: "auto" }}>
            <button
              className={`planet-label ${selected ? "is-selected" : ""}`}
              onClick={(event) => {
                event.stopPropagation();
                onSelect(project);
              }}
              aria-label={`Open details for ${project.title}`}
              aria-pressed={selected}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {project.title}
            </button>
          </Html>
        </group>
      </group>
    </group>
  );
}
