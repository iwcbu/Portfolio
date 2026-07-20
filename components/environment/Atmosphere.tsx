"use client";

export function Atmosphere() {
  return (
    <mesh scale={1.08}>
      <sphereGeometry args={[8, 32, 24]} />
      <meshBasicMaterial color="#82c9d7" transparent opacity={0.12} side={1} depthWrite={false} />
    </mesh>
  );
}
