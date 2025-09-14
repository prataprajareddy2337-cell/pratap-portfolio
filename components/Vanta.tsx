"use client";
import React from "react";
import * as THREE from "three";

export default function VantaBackground() {
  const hostRef = React.useRef<HTMLDivElement | null>(null);
  const effectRef = React.useRef<any>(null);

  React.useEffect(() => {
    let cancelled = false;

    (async () => {
      // Load the Vanta library only in the browser
      const VANTA = (await import("vanta/dist/vanta.net.min")).default;

      if (!hostRef.current || cancelled || effectRef.current) return;

      effectRef.current = VANTA({
        el: hostRef.current,
        THREE,
        backgroundAlpha: 0, // keep transparent, we add our own overlay
        color: 0xffffff,
        points: 12.0,
        maxDistance: 18.0,
        spacing: 16.0,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
      });
    })();

    return () => {
      cancelled = true;
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return <div ref={hostRef} className="absolute inset-0 -z-10 pointer-events-none" />;
}
