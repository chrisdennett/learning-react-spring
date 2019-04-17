import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { randInt } from "../../UTILS.js";

const Example8 = ({ toggleOn, config }) => {
  const r = randInt(0, 255);
  const g = randInt(0, 255);
  const b = randInt(0, 255);
  // make the text visible on the background
  const colour = (r + g + b) / 3 > 127 ? "black" : "white";
  // if you don't leave spaces in the brackets it seems to use rgba()
  // with an alpha of 1
  const bg = `rgb( ${r}, ${g}, ${b} )`;

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

export default Example8;

const ColourBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// code as text for docs
export const md = `import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { randInt } from "../../UTILS.js";

const Example8 = ({ toggleOn, config }) => {
  const r = randInt(0, 255);
  const g = randInt(0, 255);
  const b = randInt(0, 255);
  // make the text visible on the background
  const colour = (r + g + b) / 3 > 127 ? "black" : "white";
  // if you don't leave spaces in the brackets it seems to use rgba()
  // with an alpha of 1
  const bg = \`rgb( \${r}, \${g}, \${b} )\`;

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

export default Example8;

const ColourBlock = styled.div\`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
\`;`;
