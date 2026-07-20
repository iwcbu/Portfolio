"use client";

export function PlaceholderTerrain() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[55, 40, 18, 12]} />
        <meshStandardMaterial color="#273b31" roughness={0.96} wireframe={false} />
      </mesh>
      <mesh position={[0, 1.05, 0]} scale={[7, 1.25, 6]}>
        <sphereGeometry args={[1, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#3b5544" roughness={1} />
      </mesh>
      <mesh position={[-6, 0.65, -4]} scale={[4, 0.8, 3.5]}>
        <sphereGeometry args={[1, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#31483b" roughness={1} />
      </mesh>
    </group>
  );
}
