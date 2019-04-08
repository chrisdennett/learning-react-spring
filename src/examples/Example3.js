import React from "react";
import { useSpring, animated } from "react-spring";

const Example3 = ({ toggleOn = true }) => {
  const props = useSpring({ to: { number: toggleOn ? 1 : 0 } });
  const textStyle = { fontSize: 42, fontWeight: "bold" };

  return <animated.span style={textStyle}>{props.number}</animated.span>;
};

export default Example3;
