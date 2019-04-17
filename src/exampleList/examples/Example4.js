import React from "react";
import { useSpring, animated } from "react-spring";

const Example4 = ({ toggleOn = true }) => {
  const props = useSpring({ to: { scroll: toggleOn ? 0 : 310 } });

  return (
    <animated.div scrollTop={props.scroll} style={containerStyle}>
      <div style={divStyle}>hello 1</div>
      <div style={divStyle}>hello 2</div>
      <div style={divStyle}>hello 3</div>
      <div style={divStyle}>hello 4</div>
      <div style={divStyle}>hello 5</div>
      <div style={divStyle}>hello 6</div>
      <div style={divStyle}>hello 7</div>
      <div style={divStyle}>hello 8</div>
    </animated.div>
  );
};

export default Example4;

const containerStyle = {
  height: "100%",
  width: "100%",
  maxHeight: 250,
  fontSize: 18,
  fontWeight: "bold",
  overflow: "auto",
  background: "#ddd"
};
const divStyle = {
  width: "100%",
  textAlign: "center",
  padding: "20px 0",
  borderBottom: "1px solid rgba(0,0,0,0.07)",
  fontSize: 24
};
