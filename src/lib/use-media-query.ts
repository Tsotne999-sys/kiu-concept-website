"use client";
import { useCallback, useSyncExternalStore } from "react";

// Stable server snapshots keep media preferences safe during hydration.
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (notify: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", notify);
      return () => media.removeEventListener("change", notify);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
export function useAmbientMotion() {
  return useMediaQuery(
    "(min-width: 981px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
  );
}
