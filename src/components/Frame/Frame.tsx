import { PropsWithChildren } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

const Frame = ({ children }: PropsWithChildren) => {
  return (
    <div id="frame">
      <Header></Header>
      <Body>{children}</Body>
    </div>
  );
};

export default Frame;
