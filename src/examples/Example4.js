import React from "react";
import { useSpring, animated } from "react-spring";

const Example4 = ({ toggleOn = true }) => {
  const containerStyle = {
    fontSize: 18,
    fontWeight: "bold",
    height: 150,
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

  const props = useSpring({ to: { scroll: toggleOn ? 0 : 410 } });

  return (
    <animated.div scrollTop={props.scroll} style={containerStyle}>
      <div style={divStyle}>hello</div>
      <div style={divStyle}>hello</div>
      <div style={divStyle}>hello</div>
      <div style={divStyle}>hello</div>
      <div style={divStyle}>hello</div>
      <div style={divStyle}>hello</div>
      <div style={divStyle}>hello</div>
      <div style={divStyle}>hello</div>
    </animated.div>
  );
};

export default Example4;
