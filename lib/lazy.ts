"use client";

import { useEffect, useState, type RefObject } from "react";

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

/**
 * Returns `true` once the browser is idle after the component mounts.
 *
 * Used to defer heavy, non-critical client work (e.g. the WebGL hero canvas)
 * so it never competes with hydration, First Contentful Paint, or the Largest
 * Contentful Paint element on the initial load. The code only downloads and
 * executes once the main thread is free.
 */
export function useIdleMount(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const w = window as IdleWindow;
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 2500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(() => setReady(true), 300);
    return () => window.clearTimeout(t);
  }, []);

  return ready;
}

/**
 * Returns `true` once `ref` scrolls within `rootMargin` of the viewport, then
 * stays `true`. Used to lazy-mount below-the-fold components so their JS chunks
 * and assets only load right before the user reaches them.
 */
export function useInViewOnce(
  ref: RefObject<Element | null>,
  rootMargin = "300px"
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // Fallback for environments without IntersectionObserver: reveal on the
      // next frame (async, so we never setState synchronously in the effect).
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin, inView]);

  return inView;
}
