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
      <mesh>
        <sphereGeometry args={[8, 36, 24]} />
        <meshStandardMaterial color="#1e5963" roughness={0.86} metalness={0.03} />
      </mesh>
      <mesh position={[2.1, 2.8, 6.7]} scale={[2.8, 1.35, 0.35]} rotation={[0.1, -0.35, 0.4]}>
        <sphereGeometry args={[1, 18, 12]} />
        <meshStandardMaterial color="#496b4d" roughness={1} />
      </mesh>
      <mesh position={[-3.8, -1.2, 5.9]} scale={[2.5, 1.6, 0.4]} rotation={[0.1, 0.2, -0.3]}>
        <sphereGeometry args={[1, 18, 12]} />
        <meshStandardMaterial color="#587657" roughness={1} />
      </mesh>
      {[0, 1, 2].map((cloud) => (
        <mesh key={cloud} position={[-5 + cloud * 4.5, 2 - cloud, 7.7]} scale={[2.2, 0.32, 0.35]}>
          <sphereGeometry args={[1, 12, 8]} />
          <meshBasicMaterial color="#d9e1d8" transparent opacity={0.24} />
        </mesh>
      ))}
      <Atmosphere />
    </group>
  );
}
