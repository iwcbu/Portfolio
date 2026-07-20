"use client";

import { PlaceholderHouse } from "../environment/PlaceholderHouse";
import { PlaceholderTerrain } from "../environment/PlaceholderTerrain";

export function HouseScene() {
  return (
    <group position={[0, -3.2, -164]}>
      <hemisphereLight args={["#7d91a3", "#1b261f", 0.9]} />
      <directionalLight position={[-8, 14, 9]} color="#ddb17c" intensity={2} castShadow={false} />
      <pointLight position={[0, 4, 4]} color="#e7a05b" intensity={14} distance={16} />
      <PlaceholderTerrain />
      <PlaceholderHouse />
      <mesh position={[-12, 9, -9]}>
        <sphereGeometry args={[2.2, 20, 16]} />
        <meshBasicMaterial color="#e7cfa0" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}
