import React, { useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
// styles
import "./app.css";
// comps
import Example1, { md as eg1Md } from "./examples/Example1";
import Example2, { md as eg2Md } from "./examples/Example2";
import Example3, { md as eg3Md } from "./examples/Example3";
import Example4 from "./examples/Example4";
import Example5 from "./examples/Example5";
import Example6 from "./examples/Example6";
import Example7 from "./examples/Example7";
import Example8 from "./examples/Example8";
import Example9 from "./examples/Example9";
import Example10 from "./examples/Example10";
import Example11 from "./examples/Example11";
import Example12 from "./examples/Example12";
import Example13 from "./examples/Example13";
import FloatingToggle from "./components/FloatingToggle";
import CodeBlock from "./components/CodeBlock";

const examples = [
  {
    number: 1,
    Comp: Example1,
    code: eg1Md,
    title: "fade in/out",
    notes: ""
  },
  {
    number: 2,
    Comp: Example2,
    code: eg2Md,
    title: "svg path",
    notes: ""
  },
  {
    number: 3,
    Comp: Example3,
    code: eg3Md,
    title: "animated value as text",
    notes:
      "If you want to mix with other text or alter the animated value (e.g. restrict the decimals) you need to use interpolate. [(thanks for the tip Paul)](https://twitter.com/artflychris/status/1115637329681633281)"
  },
  {
    number: 4,
    Comp: Example4,
    title: "scroll",
    notes:
      "The amount I'm scrolling is a fudge - just tried different values until it hit the bottom at an ok speed! Need to work out how to scroll to dynamic points e.g. headings etc."
  },
  {
    number: 5,
    Comp: Example5,
    title: "",
    notes:
      "I had problems with this one.  To pass animated props into a child component you either need that child to be a class component, or you use animated within that child."
  },
  {
    number: 6,
    Comp: Example6,
    title: "passing animated values to child components",
    notes:
      "I finally figured out that you can use as many children as you like but if they display animated values they need to use the animated.[element] syntax.  Perhaps this should have been obvious, but I kinda thought child elements would somehow inherit animated values."
  },
  {
    number: 7,
    Comp: Example7,
    title: "colour - hsl",
    notes:
      "The spaces at the start and end of the brackets are intentional. If I remove them it seems to convert the colour to rgba which works fine, but is confusing for the text."
  },
  {
    number: 8,
    Comp: Example8,
    title: "colour - rgb",
    notes: ""
  },
  {
    number: 9,
    Comp: Example9,
    title: "linear gradient",
    notes: ""
  },
  {
    number: 10,
    Comp: Example10,
    title: "diagonal gradient",
    notes: ""
  },
  {
    number: 11,
    Comp: Example11,
    title: "three colour gradient",
    notes: ""
  },
  {
    number: 12,
    Comp: Example12,
    title: "Radial gradient",
    notes: ""
  },
  {
    number: 13,
    Comp: Example13,
    title: "Grid Layout",
    notes:
      "Wow, learning a lot in this one. As well as react-spring I'm Learning about css grid layout for the first time and the awesome Firefox grid inspector! [(see Mozilla grid layout guide)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)"
  }
];

const App = () => {
  const [toggleOn, setToggleOn] = useState(true);
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="app">
      <FloatingToggle
        isToggled={toggleOn}
        onToggle={isOn => setToggleOn(isOn)}
      />

      <FloatingToggle
        left={200}
        isToggled={showCode}
        onToggle={isOn => setShowCode(isOn)}
      />

      <Header>
        <h1>Learning react-spring</h1>
        <p>These are my notes while getting to grips with react-spring.</p>
        <p>
          Writing this up is my way of getting my head round what's going on.
        </p>
      </Header>
      <ExamplesList showCode={showCode}>
        {examples.map(eg => {
          const { title, Comp, number, notes, code } = eg;
          return (
            <ExampleCell key={number}>
              <NumberCorner>
                <polygon points={`0,0, 35,0, 0,35`} />
                <text x={6} y={15} fill="black">
                  {number}
                </text>
              </NumberCorner>

              <Example>
                <Comp toggleOn={toggleOn} />
              </Example>

              <ExampleTitle>{title}</ExampleTitle>

              {notes && <ReactMarkdown>{notes}</ReactMarkdown>}

              {code && showCode && <CodeBlock value={code} />}
            </ExampleCell>
          );
        })}
      </ExamplesList>
    </div>
  );
};

export default App;

const Header = styled.div`
  margin-bottom: 60px;
`;

const ExamplesList = styled.div`
  display: grid;

  grid-gap: 8px;
  row-gap: ${props => (props.showCode ? "80px" : "30px")};

  grid-template-columns: ${props =>
    props.showCode
      ? "repeat(auto-fill, minmax(100%, 1fr))"
      : "repeat(auto-fill, minmax(250px, 1fr))"};

  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
`;

const ExampleCell = styled.div`
  display: grid;
  grid-template-columns: 3;
  grid-template-rows: 250px 35px auto auto;
  position: relative;
`;

const Example = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
  background: whitesmoke;
  border-radius: 3px;
`;

const ExampleTitle = styled.h2`
  font-weight: normal;
  font-size: 18px;
  margin: 0;
  color: white;
  padding: 5px 20px;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
`;

const NumberCorner = styled.svg`
  top: 0;
  left: 0;
  position: absolute;
  width: 35px;
  height: 35px;

  text {
    fill: white;
    font-size: 12px;
  }

  polygon {
    fill: rgba(0, 0, 0, 0.7);
  }
`;

/* <Section>
        <SectionHeader>
          <h2>
            Part 1: Attempt to recreate examples from{" "}
            <a href="https://www.react-spring.io/docs/hooks/basics">
              docs Basics section
            </a>
          </h2>
          <p>
            Until I got to the last one, these all felt pretty straight forward
            using the bits of the code shown in the docs and working out the
            rest.
          </p>
          <a href="https://codesandbox.io/s/k0rxj8n4wv?fontsize=14">
            <img
              alt="Edit react-spring examples"
              src="https://codesandbox.io/static/img/play-codesandbox.svg"
            />
          </a>
        </SectionHeader>
      </Section>
      <Section>
        <SectionHeader>
          <h2>Part 2: Passing animated values to children</h2>
          <p>
            Until I got to the last one, these all felt pretty straight forward
            using the bits of the code shown in the docs and working out the
            rest.
          </p>
          <a href="https://codesandbox.io/s/88qm71jw9?fontsize=14">
            <img
              alt="Edit react-spring child components"
              src="https://codesandbox.io/static/img/play-codesandbox.svg"
            />
          </a>
        </SectionHeader> 
      </Section>*/
