import { useState } from "react";
import useResize from "./useResize";

const breakpoints = [
  { key: "xs", value: 0 },
  { key: "s", value: 576 },
  { key: "m", value: 768 },
  { key: "l", value: 992 },
  { key: "xl", value: 1200 },
  { key: "xxl", value: 1400 },
];

const getBreakpoint = (width: number) => {
  const bp = breakpoints.toReversed().find(({ value }) => width >= value) ?? {
    key: "xs",
    value: 0,
  };
  return bp.key;
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("xs");

  useResize(({ width }) => {
    const newBreakpoint = getBreakpoint(width);
    if (breakpoint !== newBreakpoint) setBreakpoint(newBreakpoint);
  });

  return breakpoint;
};

export default useBreakpoint;
