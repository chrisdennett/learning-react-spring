import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Example13 = ({ toggleOn = true }) => {
  const cols1 = `1fr 3fr 1fr`;
  const cols2 = `3fr 3fr 3fr`;
  const rows1 = `1fr 6fr 1fr`;
  const rows2 = `3fr 3fr 3fr`;

  const props = useSpring({
    gridTemplateColumns: toggleOn ? cols1 : cols2,
    gridTemplateRows: toggleOn ? rows1 : rows2
  });

  const AnimatedGrid = animated(Grid);

  return (
    <AnimatedGrid style={props}>
      <Box1>One</Box1>
      <Box2>Two</Box2>
      <Box3>Three</Box3>
      <Box4>Four</Box4>
      <Box5>Five</Box5>
    </AnimatedGrid>
  );
};

export default Example13;

const Grid = styled.div`
  display: grid;
  color: white;
  width: 100%;
  height: 100%;
`;

const Box1 = styled.div`
  background: yellow;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 10px;
  color: black;
`;

const Box2 = styled.div`
  background: red;
  padding: 10px;
  order: 4;
`;

const Box3 = styled.div`
  background: blue;
  padding: 10px;
`;

const Box4 = styled.div`
  background: green;
  padding: 10px;
  order: 2;
`;

const Box5 = styled.div`
  background: purple;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  padding: 10px;
`;
