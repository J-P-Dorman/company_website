import { useEffect } from "react";

const useInterval = (callback: () => void, time: number = 500) => {
  useEffect(() => {
    const interval = window.setInterval(() => {
      callback();
    }, time);

    return () => {
      clearInterval(interval);
    };
  }, [callback, time]);
};

export default useInterval;
