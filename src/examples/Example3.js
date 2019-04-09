import React from "react";
import { useSpring, animated } from "react-spring";

const Example3 = ({ toggleOn = true }) => {
  const props = useSpring({ to: { number: toggleOn ? 1 : 0 } });
  const textStyle = { fontSize: 42, fontWeight: "bold" };

  return (
    <div>
      <animated.div style={textStyle}>{props.number}</animated.div>
      <animated.div>
        {props.number.interpolate(v => `Mixed with other text: ${v}`)}
      </animated.div>
    </div>
  );
};

export default Example3;
