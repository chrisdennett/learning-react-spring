import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { randInt } from "../UTILS.js";

const Example11 = ({ toggleOn = true }) => {
  const r1 = randInt(0, 255);
  const g1 = randInt(0, 255);
  const b1 = randInt(0, 255);
  const r2 = randInt(0, 255);
  const g2 = randInt(0, 255);
  const b2 = randInt(0, 255);
  const r3 = randInt(0, 255);
  const g3 = randInt(0, 255);
  const b3 = randInt(0, 255);
  // make the text visible on the background
  const colour = (r1 + g1 + b1) / 3 > 127 ? "black" : "white";
  // limiting the satuation and lightness to 10% to 80%
  // to avoid lots of near blacks and near whites (boring)
  const bg = `linear-gradient(rgb( ${r1}, ${g1}, ${b1} ), rgb( ${r2}, ${g2}, ${b2}), rgb( ${r3}, ${g3}, ${b3} ) )`;

  const props = useSpring({ backgroundImage: bg, color: colour });
  const AnimatedColourBlock = animated(ColourBlock);

  return (
    <AnimatedColourBlock style={{ ...props }}>
      {props.backgroundImage}
    </AnimatedColourBlock>
  );
};

export default Example11;

const ColourBlock = styled.div`
  height: 200px;
  padding: 20px;
`;