"use client";
import React from "react";
import * as THREE from "three";

// Minimal types so we don't use `any`
type VantaEffect = { destroy: () => void };
type VantaNet = (opts: {
  el: HTMLElement;
  THREE: typeof THREE;
  backgroundAlpha?: number;
  color?: number;
  points?: number;
  maxDistance?: number;
  spacing?: number;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
}) => VantaEffect;

// allow attaching THREE to the global object for Vanta in prod
declare global {
  // eslint-disable-next-line no-var
  var THREE: typeof THREE | undefined;
}

export default function VantaBackground() {
  const hostRef = React.useRef<HTMLDivElement | null>(null);
  const effectRef = React.useRef<VantaEffect | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    // expose THREE for Vanta
    (globalThis as typeof globalThis & { THREE?: typeof THREE }).THREE = THREE;

    (async () => {
      const mod = (await import("vanta/dist/vanta.net.min")) as { default: VantaNet };
      const NET = mod.default;

      if (cancelled || !hostRef.current || effectRef.current) return;

      effectRef.current = NET({
        el: hostRef.current,
        THREE,
        backgroundAlpha: 0, // transparent; we add our own dark overlay
        color: 0xffffff,
        points: 12,
        maxDistance: 18,
        spacing: 16,
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

  return <div ref={hostRef} className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true" />;
}
