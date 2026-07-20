"use client";

import { useEffect, useState } from "react";

export function useDevicePerformance() {
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
      const cores = navigator.hardwareConcurrency;
      setIsLowPower(window.innerWidth < 720 || (memory !== undefined && memory <= 4) || cores <= 4);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return isLowPower;
}
