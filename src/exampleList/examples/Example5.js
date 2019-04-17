import React from "react";
import { useSpring, animated } from "react-spring";

const Example5 = ({ toggleOn, cofig }) => {
  const props = useSpring({
    to: { value: toggleOn ? 100 : 0 },
    cofig
  });

  const AnimatedClassDonut = animated(ClassDonut);
  const percent = props.value.interpolate(x => 156 * (x / 100));

  return (
    <div>
      {/* <BrokenDonut percent={percent} /> */}
      <AnimatedClassDonut percent={percent} />
      <FunctionalDonut percent={percent} />
    </div>
  );
};

export default Example5;

// if using a class component, it doesn't need the "animated" component
class ClassDonut extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 51 51" style={{ width: 80, height: 80 }}>
        <circle
          strokeWidth="2.5"
          fill="white"
          stroke="rgb(45, 55, 71)"
          strokeLinecap="round"
          strokeDasharray={156}
          strokeDashoffset={this.props.percent}
          cx="25.5"
          cy="25.5"
          r="24.5"
        />
      </svg>
    );
  }
}

const FunctionalDonut = ({ percent }) => {
  return (
    <svg viewBox="0 0 51 51" style={{ width: 80, height: 80 }}>
      <animated.circle
        strokeWidth="2.5"
        fill="white"
        stroke="rgb(45, 55, 71)"
        strokeLinecap="round"
        strokeDasharray={156}
        strokeDashoffset={percent}
        cx="25.5"
        cy="25.5"
        r="24.5"
      />
    </svg>
  );
};

/* 
// this doesn't work because it doesn't use the animated component
const BrokenDonut = ({ percent }) => {
  return (
    <svg viewBox="0 0 51 51" style={{ width: 80, height: 80 }}>
      <circle
        strokeWidth="2.5"
        fill="white"
        stroke="rgb(45, 55, 71)"
        strokeLinecap="round"
        strokeDasharray={156}
        strokeDashoffset={156 * (percent / 100)}
        cx="25.5"
        cy="25.5"
        r="24.5"
      />
    </svg>
  );
};
 */
