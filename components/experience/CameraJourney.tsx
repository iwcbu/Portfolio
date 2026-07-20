"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { Vector3 } from "three";
import { cameraCheckpoints } from "../../config/cameraCheckpoints";

function smoothstep(value: number) {
  return value * value * (3 - 2 * value);
}

export function CameraJourney({ progress, reducedMotion }: { progress: number; reducedMotion: boolean }) {
  const desiredPosition = useMemo(() => new Vector3(), []);
  const desiredTarget = useMemo(() => new Vector3(), []);
  const lookTarget = useMemo(() => new Vector3(), []);

  useFrame(({ camera }) => {
    let index = cameraCheckpoints.findIndex((checkpoint) => progress <= checkpoint.end);
    if (index < 0) index = cameraCheckpoints.length - 1;
    const current = cameraCheckpoints[index];
    const next = cameraCheckpoints[Math.min(index + 1, cameraCheckpoints.length - 1)];
    const span = Math.max(0.001, current.end - current.start);
    const local = smoothstep(Math.min(1, Math.max(0, (progress - current.start) / span)));

    desiredPosition.set(...current.position).lerp(new Vector3(...next.position), local);
    desiredTarget.set(...current.target).lerp(new Vector3(...next.target), local);

    if (reducedMotion) {
      camera.position.copy(desiredPosition);
      lookTarget.copy(desiredTarget);
    } else {
      camera.position.lerp(desiredPosition, 0.07);
      lookTarget.lerp(desiredTarget, 0.09);
    }
    camera.lookAt(lookTarget);
  });

  return null;
}
