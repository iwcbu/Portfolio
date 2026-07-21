"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import { Atmosphere } from "../environment/Atmosphere";

export function EarthScene({ reducedMotion }: { reducedMotion: boolean }) {
  const earth = useRef<Group>(null);
  useFrame((_, delta) => {
    if (earth.current && !reducedMotion) earth.current.rotation.y += delta * 0.018;
  });

  return (
    <group ref={earth} position={[0, -1, -130]}>
      
      <pointLight
        position={[12, 8, -15]}
        intensity={500}
        distance={60}
        color="#ffffff"
      />

      <mesh>
        <sphereGeometry args={[6, 36, 24]} />
        <meshStandardMaterial color="#1e5963" roughness={0.86} metalness={0.03} />
      </mesh>
      <Atmosphere />
    </group>
  );
}
