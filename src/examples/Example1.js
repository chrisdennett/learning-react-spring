import React from "react";
import { useSpring, animated } from "react-spring";

const Example1 = ({ toggleOn = true }) => {
  const props = useSpring({ to: { opacity: toggleOn ? 1 : 0 } });
  return <animated.h1 style={props}>hello</animated.h1>;
};

export default Example1;