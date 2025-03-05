import { PropsWithChildren, useState } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

type Props = {};

const Frame = ({ children }: PropsWithChildren<Props>) => {
  return (
    <div id="frame">
      <Header></Header>
      <Body>{children}</Body>
    </div>
  );
};

export default Frame;
