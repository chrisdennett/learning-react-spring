import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Example7 = ({ toggleOn, config }) => {
  const lightness = randInt(10, 80);
  // make the text visible on the background
  const colour = lightness > 50 ? "black" : "white";
  // limiting the satuation and lightness to 10% to 80%
  // to avoid lots of near blacks and near whites (boring)
  const bg = `hsl(
      ${randInt(0, 360)}, 
      ${randInt(10, 80)}%, 
      ${lightness}%
      )`;

  const props = useSpring({
    background: bg,
    color: colour,
    config
  });
  const AnimatedColourBlock = animated(ColourBlock);

  return (
    <AnimatedColourBlock style={{ ...props }}>
      {props.background}
    </AnimatedColourBlock>
  );
};

export default Example7;

const ColourBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function randInt(min = 0, max = 100) {
  const range = max - min;
  const randomNumber = min + Math.random() * range;
  return Math.floor(randomNumber);
}
