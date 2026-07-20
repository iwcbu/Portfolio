"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export function UniverseScene({ reducedMotion }: { reducedMotion: boolean }) {
  const nebula = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (nebula.current && !reducedMotion) nebula.current.rotation.z += delta * 0.012;
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={nebula} rotation={[1.2, 0.2, 0.3]}>
        <torusGeometry args={[8, 2.8, 12, 96]} />
        <meshBasicMaterial color="#344d68" transparent opacity={0.08} depthWrite={false} />
      </mesh>
      <mesh position={[-8, 3, -8]}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshBasicMaterial color="#a7cfd8" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}
