import React from "react";
import { useSpring, animated, interpolate } from "react-spring";

const Example6 = ({ toggleOn, config }) => {
  const staticStyles = {
    padding: 2,
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

  const props = useSpring({
    to: toggleOn ? startProps : endProps,
    config
  });

  return (
    <div>
      <animated.div style={{ ...props, ...staticStyles }}>
        {props.color}
      </animated.div>

      <animated.div style={{ ...props, ...staticStyles }}>
        {interpolate([props.color, props.background], (c, b) => {
          return `bg: ${b}, color: ${c}`;
        })}
      </animated.div>

      {/* Wrap any animaged values with the animated template */}
      <animated.div style={{ ...props, ...staticStyles }}>
        <div>
          color: <animated.span>{props.color}</animated.span>,
        </div>
        <div>
          bg: <animated.span>{props.background}</animated.span>
        </div>
      </animated.div>

      {/* Map through and display all props */}
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

// code as text for docs
export const md = `import React from "react";
import { useSpring, animated, interpolate } from "react-spring";

const Example6 = ({ toggleOn, config }) => {
  const staticStyles = {
    padding: 2,
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

  const props = useSpring({
    to: toggleOn ? startProps : endProps,
    config
  });

  return (
    <div>
      <animated.div style={{ ...props, ...staticStyles }}>
        {props.color}
      </animated.div>

      <animated.div style={{ ...props, ...staticStyles }}>
        {interpolate([props.color, props.background], (c, b) => {
          return \`bg: \${b}, color: \${c}\`;
        })}
      </animated.div>

      {/* Wrap any animaged values with the animated template */}
      <animated.div style={{ ...props, ...staticStyles }}>
        <div>
          color: <animated.span>{props.color}</animated.span>,
        </div>
        <div>
          bg: <animated.span>{props.background}</animated.span>
        </div>
      </animated.div>

      {/* Map through and display all props */}
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
`;
