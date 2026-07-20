"use client";

export function PlaceholderHouse() {
  return (
    <group position={[0, 2.1, 0]}>
      <mesh position={[0, 1.35, 0]} castShadow>
        <boxGeometry args={[4.2, 2.7, 3.2]} />
        <meshStandardMaterial color="#c5b58f" roughness={0.92} />
      </mesh>
      <mesh position={[0, 3.05, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[3.25, 2, 4]} />
        <meshStandardMaterial color="#4a2f2a" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.8, 1.64]}>
        <boxGeometry args={[0.95, 1.7, 0.08]} />
        <meshStandardMaterial color="#26342e" />
      </mesh>
      <mesh position={[-1.35, 1.65, 1.65]}>
        <boxGeometry args={[0.78, 0.8, 0.09]} />
        <meshStandardMaterial color="#f0b469" emissive="#d17b3c" emissiveIntensity={1.4} />
      </mesh>
      <mesh position={[1.35, 1.65, 1.65]}>
        <boxGeometry args={[0.78, 0.8, 0.09]} />
        <meshStandardMaterial color="#f0b469" emissive="#d17b3c" emissiveIntensity={1.4} />
      </mesh>
      <mesh position={[3.35, -0.6, 1.5]}>
        <boxGeometry args={[0.28, 1.35, 0.28]} />
        <meshStandardMaterial color="#4c3b2e" />
      </mesh>
      <mesh position={[3.35, 0.05, 1.5]}>
        <boxGeometry args={[1.05, 0.62, 0.58]} />
        <meshStandardMaterial color="#7b6447" />
      </mesh>
    </group>
  );
}
