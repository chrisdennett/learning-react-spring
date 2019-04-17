import React from "react";
import { useSpring, animated } from "react-spring";

const AnimationTimer = ({ toggleOn, toggleChange, animConfig }) => {
  const props = useSpring({
    opacity: toggleOn ? 1 : 0,
    delay: 200,
    config: animConfig,
    onRest: () => toggleChange(!toggleOn)
  });

  return (
    <div>
      <animated.div style={props}>I will fade in</animated.div>
    </div>
  );
};

export default AnimationTimer;
