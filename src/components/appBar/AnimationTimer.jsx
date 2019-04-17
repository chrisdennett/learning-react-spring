import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const AnimationTimer = ({ toggleOn, toggleChange, animConfig }) => {
  const props = useSpring({
    opacity: toggleOn ? 1 : 0,
    delay: 200,
    config: animConfig,
    onRest: () => toggleChange(!toggleOn)
  });

  return (
    <div>{/* <animated.div style={props}>I will fade in</animated.div> */}</div>
  );
};

export default AnimationTimer;

const darkColour = "#303030";
const lightColour = "whitesmoke";

const Outer = styled.div`
  border-radius: 5px;
  background: ${props => (props.isOn ? lightColour : darkColour)};
  color: ${props => (props.isOn ? darkColour : lightColour)};
  min-width: 48px;
  padding: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
