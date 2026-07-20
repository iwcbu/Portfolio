"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

export function GalaxyScene({ reducedMotion, lowPower }: { reducedMotion: boolean; lowPower: boolean }) {
  const group = useRef<Group>(null);
  const count = lowPower ? 380 : 760;
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const radius = 0.6 + ((index * 47) % count) / count * 15;
      const arm = index % 3;
      const angle = radius * 0.72 + arm * (Math.PI * 2) / 3 + Math.sin(index * 91.7) * 0.3;
      values[index * 3] = Math.cos(angle) * radius;
      values[index * 3 + 1] = Math.sin(index * 2.13) * (1.2 - radius / 18);
      values[index * 3 + 2] = Math.sin(angle) * radius;
    }
    return values;
  }, [count]);

  useFrame((_, delta) => {
    if (group.current && !reducedMotion) group.current.rotation.y += delta * 0.015;
  });

  return (
    <group ref={group} position={[0, 0, -43]} rotation={[0.18, 0.15, -0.12]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#a8d7df" size={0.13} transparent opacity={0.82} />
      </points>
      <mesh>
        <sphereGeometry args={[1.7, 24, 18]} />
        <meshBasicMaterial color="#fff0be" transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4.5, 14.5, 96]} />
        <meshBasicMaterial color="#6c829d" transparent opacity={0.045} side={2} depthWrite={false} />
      </mesh>
    </group>
  );
}
