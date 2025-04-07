import { useEffect, useState } from "react";
import { useDebounce } from "..";

const useResize = (
  callback: ({ width, height }: { width: number; height: number }) => void,
  time: number = 50
) => {
  const [width, setWidth] = useState(window.outerWidth);
  const [height, setHeight] = useState(window.outerHeight);
  const widthDebounce = useDebounce(width, time);
  const heightDebounce = useDebounce(height, time);

  useEffect(() => {
    callback({
      width: widthDebounce,
      height: heightDebounce,
    });
  }, [widthDebounce, heightDebounce]);

  window.addEventListener("resize", () => {
    setWidth(window.outerWidth);
    setHeight(window.outerHeight);
  });
};

export default useResize;
