import { useEffect } from "react";

const useTimeout = (
  callback: () => void,
  dependencies: unknown[],
  time: number = 500
) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      callback();
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [callback, time, ...dependencies]);
};

export default useTimeout;
