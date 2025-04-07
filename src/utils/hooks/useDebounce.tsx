import { useEffect, useState } from "react";

const useDebounce = <T extends string | number | boolean>(
  value: T,
  time: number = 500
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [timeout, setTimeout] = useState<number | undefined>(undefined);

  useEffect(() => {
    clearTimeout(timeout);

    setTimeout(
      window.setTimeout(() => {
        setDebouncedValue(value);
      }, time)
    );

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
