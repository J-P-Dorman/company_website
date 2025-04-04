import { PropsWithChildren } from "react";
import "./Body.scss";

const Body = ({ children }: PropsWithChildren) => {
  return <div id="body">{children}</div>;
};

export default Body;
