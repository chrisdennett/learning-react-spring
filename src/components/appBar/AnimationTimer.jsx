import React from "react";
// import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const AnimationTimer = ({ toggleOn, toggleChange, animConfig }) => {
  const svgHeight = 24;
  const svgWidth = 4;
  const barHeight = 2;
  const bottomBarPos = svgHeight - barHeight;

  const props = useSpring({
    y: toggleOn ? 0 : bottomBarPos,
    delay: 1,
    config: animConfig,
    onRest: () => toggleChange(!toggleOn)
  });

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      style={{ border: "001px solid rgba(255,255,255,0.2)" }}
    >
      <animated.rect
        fill={"white"}
        y={props.y}
        x={0}
        width={"100%"}
        height={barHeight}
      />
    </svg>
  );
};

export default AnimationTimer;

// const darkColour = "#303030";
// const lightColour = "whitesmoke";

// const Outer = styled.div`
//   border-radius: 5px;
//   background: ${props => (props.isOn ? lightColour : darkColour)};
//   color: ${props => (props.isOn ? darkColour : lightColour)};
//   min-width: 48px;
//   padding: 8px;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// `;
