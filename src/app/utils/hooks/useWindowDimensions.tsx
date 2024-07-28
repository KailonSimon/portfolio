// utils/hooks/useWindowDimensions.ts
import { useState, useEffect, useCallback } from "react";

interface WindowDimensions {
  width: number;
  height: number;
}

/**
 * Gets the current window dimensions.
 *
 * @returns An object containing the width and height of the window.
 */
const getWindowDimensions = (): WindowDimensions => {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 };
  }
  
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

/**
 * Custom React hook that provides the current window dimensions and updates them on window resize.
 *
 * @returns An object containing the width and height of the window.
 *
 * @example
 * const { width, height } = useWindowDimensions();
 */
export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return windowDimensions;
};