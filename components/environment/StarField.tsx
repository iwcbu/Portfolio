"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Points } from "three";

function seeded(index: number, offset: number) {
  const value = Math.sin(index * 12.9898 + offset * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

export function StarField({ count, reducedMotion }: { count: number; reducedMotion: boolean }) {
  const ref = useRef<Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (seeded(index, 1) - 0.5) * 120;
      values[index * 3 + 1] = (seeded(index, 2) - 0.5) * 70;
      values[index * 3 + 2] = 28 - seeded(index, 3) * 225;
    }
    return values;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current && !reducedMotion) ref.current.rotation.z += delta * 0.003;
  });

  return (
    <points ref={ref} frustumCulled>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#cfe7ee" size={0.1} sizeAttenuation transparent opacity={0.82} />
    </points>
  );
}
