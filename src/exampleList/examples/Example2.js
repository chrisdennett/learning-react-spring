import React from "react";
import { useSpring, animated } from "react-spring";

const Example2 = ({ toggleOn, config }) => {
  const props = useSpring({
    to: { x: toggleOn ? 0 : 100 },
    config
  });

  return (
    <svg width={80} height={80} viewBox={`0 0 24 24`}>
      <animated.path
        strokeDasharray={100}
        strokeDashoffset={props.x}
        strokeWidth={1}
        stroke="#000"
        fill="#fff"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  );
};

export default Example2;

// code displaded on the site
// replace every time code above updated
export const md = `import React from "react";
import { useSpring, animated } from "react-spring";

const Example2 = ({ toggleOn = true }) => {
  const props = useSpring({ to: { x: toggleOn ? 0 : 100 } });

  return (
    <svg width={80} height={80} viewBox={\`0 0 24 24\`}>
      <animated.path
        strokeDasharray={100}
        strokeDashoffset={props.x}
        strokeWidth={1}
        stroke="#000"
        fill="#fff"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  );
};

export default Example2;
`;
