import { PropsWithChildren, useState } from "react";
import "./Body.scss";

type Props = {};

const Body = ({ children }: PropsWithChildren<Props>) => {
  return <div id="body">{children}</div>;
};

export default Body;
