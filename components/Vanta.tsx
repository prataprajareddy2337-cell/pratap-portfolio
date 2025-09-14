"use client";
import React from "react";

export default function VantaBackground() {
  const hostRef = React.useRef<HTMLDivElement | null>(null);
  const effectRef = React.useRef<any>(null);

  React.useEffect(() => {
    let cancelled = false;

    (async () => {
      // load THREE only in the browser
      const THREE: any = await import("three");
      // make THREE visible globally for Vanta (prod fix)
      (globalThis as any).THREE = THREE;

      // load Vanta only in the browser
      const NET: any = (await import("vanta/dist/vanta.net.min")).default;

      if (cancelled || !hostRef.current || effectRef.current) return;

      effectRef.current = NET({
        el: hostRef.current,
        THREE,
        backgroundAlpha: 0,
        color: 0xffffff,
        points: 12,
        maxDistance: 18,
        spacing: 16,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
      });
    })().catch((e) => console.error("Vanta init failed:", e));

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
