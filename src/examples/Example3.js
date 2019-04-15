import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Example3 = ({ toggleOn = true }) => {
  const props = useSpring({ to: { number: toggleOn ? 1 : 0 } });
  const textStyle = { fontSize: 24, fontWeight: "bold" };

  return (
    <ExampleContainer>
      <animated.div style={textStyle}>{props.number}</animated.div>
      <animated.div>
        {props.number.interpolate(
          v => `Mixed with other text: ${v.toFixed(3)}`
        )}
      </animated.div>
    </ExampleContainer>
  );
};

export default Example3;

// I'm trying out styled-components
const ExampleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// code displaded on the site
// replace every time code above updated
export const md = `import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Example3 = ({ toggleOn = true }) => {
  const props = useSpring({ to: { number: toggleOn ? 1 : 0 } });
  const textStyle = { fontSize: 24, fontWeight: "bold" };

  return (
    <ExampleContainer>
      <animated.div style={textStyle}>{props.number}</animated.div>
      <animated.div>
        {props.number.interpolate(
          v => \`Mixed with other text: \${v.toFixed(3)}\`
        )}
      </animated.div>
    </ExampleContainer>
  );
};

export default Example3;

// I'm trying out styled-components
const ExampleContainer = styled.div\`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
\`;
`;
