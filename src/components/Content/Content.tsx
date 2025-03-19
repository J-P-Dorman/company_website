import "./Content.scss";
import { PropsWithChildren } from "react";

type Props = {};

const Content = ({ children }: PropsWithChildren<Props>) => {
  return (
    <div id="content">
      <div className="width-wrapper">{children}</div>
    </div>
  );
};

export default Content;
