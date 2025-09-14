"use client";
import React from "react";
import * as THREE from "three";

export default function VantaBackground() {
  const hostRef = React.useRef<HTMLDivElement | null>(null);
  const effectRef = React.useRef<any>(null);

  React.useEffect(() => {
    let cancelled = false;

    // 🔧 IMPORTANT: expose THREE on window for Vanta in production
    (globalThis as any).THREE = THREE;

    (async () => {
      try {
        const { default: NET } = await import("vanta/dist/vanta.net.min");
        if (cancelled || !hostRef.current || effectRef.current) return;

        effectRef.current = NET({
          el: hostRef.current,
          THREE,
          backgroundAlpha: 0,  // keep transparent; we add our own dark overlay
          color: 0xffffff,
          points: 12.0,
          maxDistance: 18.0,
          spacing: 16.0,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
        });
      } catch (err) {
        console.error("Vanta init failed:", err);
      }
    })();

    return () => {
      cancelled = true;
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return <div ref={hostRef} className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true" />;
}
