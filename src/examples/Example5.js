import React from "react";
import { useSpring, animated } from "react-spring";

const Example5 = ({ toggleOn = true }) => {
  const props = useSpring({ to: { value: toggleOn ? 100 : 0 } });
  const AnimatedClassDonut = animated(ClassDonut);

  return (
    <div>
      <AnimatedClassDonut percent={props.value} />
      <FunctionDonut percent={props.value} />
    </div>
  );
};

export default Example5;

// ClassDonut
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
          strokeDashoffset={156 * (this.props.percent / 100)}
          cx="25.5"
          cy="25.5"
          r="24.5"
        />
      </svg>
    );
  }
}

// FunctionDonut
const FunctionDonut = ({ percent }) => {
  return (
    <svg viewBox="0 0 51 51" style={{ width: 80, height: 80 }}>
      <animated.circle
        strokeWidth="2.5"
        fill="white"
        stroke="rgb(45, 55, 71)"
        strokeLinecap="round"
        strokeDasharray={156}
        strokeDashoffset={percent.interpolate(p => 156 * (p / 100))}
        cx="25.5"
        cy="25.5"
        r="24.5"
      />
    </svg>
  );
};
