import { forwardRef } from "react";
import withDimensions from "./WithDimensions";

const Comp1 = (props, forwardedRefFromParent) => {
  return (
    <div ref={forwardedRefFromParent} className="comp1">
      {" "}
      hey i am comp1 and my width is:
      {props.width}
    </div>
  );
};

export default withDimensions(forwardRef(Comp1));
