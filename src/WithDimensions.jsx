import { useRef, useState, useEffect } from "react";

const withDimensions = (Component) => {
  return function WithDimensions(props) {
    const compRef = useRef();

    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    useEffect(() => {
      if (compRef.current) {
        setWidth(compRef.current.offsetWidth);
        setHeight(compRef.current.offsetHeight);
      }
    }, [compRef]);

    return <Component ref={compRef} width={width} height={height} {...props} />;
  };
};

export default withDimensions;
