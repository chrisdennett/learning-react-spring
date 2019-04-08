import React from "react";
import { useSpring, animated, interpolate } from "react-spring";

const Example6 = ({ toggleOn = true }) => {
  const staticStyles = {
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    textAlign: "center"
  };

  const startProps = {
    background: "yellow",
    color: "black"
  };
  const endProps = {
    background: "blue",
    color: "white"
  };

  const props = useSpring({ to: toggleOn ? startProps : endProps });

  const textStyle = { fontSize: 42, fontWeight: "bold" };

  return (
    <div>
      <h2>Displaying the prop as text</h2>
      <p>
        It took me an age to realise this with my blunt trail and error method
        of learning. You can only used animated props directly in an animated
        element.
      </p>

      <animated.div style={{ ...props, ...staticStyles }}>
        {props.color}
      </animated.div>

      <animated.div style={{ ...props, ...staticStyles }}>
        {interpolate([props.color, props.background], (c, b) => {
          return `bg: ${b}, color: ${c}`;
        })}
      </animated.div>

      <animated.div style={{ ...props, ...staticStyles }}>
        <div>
          color: <animated.span>{props.color}</animated.span>,
        </div>
        <div>
          background: <animated.span>{props.background}</animated.span>
        </div>
      </animated.div>

      <animated.div style={{ ...props, ...staticStyles }}>
        {Object.keys(props).map(key => {
          return (
            <div key={key}>
              {key}: <animated.span>{props[key]}</animated.span>
            </div>
          );
        })}
      </animated.div>
    </div>
  );
};

export default Example6;
