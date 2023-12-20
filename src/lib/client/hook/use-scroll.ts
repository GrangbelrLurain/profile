import { useEffect, useState } from "react";

type TCallbackValue = {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
};

const useScroll = (callback: (value: TCallbackValue) => void) => {
  const [lastScroll, setLastScroll] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollTarget = window;
        const x = scrollTarget.scrollX;
        const y = scrollTarget.scrollY;
        const directionX = lastScroll.x - x;
        const directionY = lastScroll.y - y;
        callback({ x, y, directionX, directionY });
        setLastScroll({ x, y });
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });
};

export default useScroll;
