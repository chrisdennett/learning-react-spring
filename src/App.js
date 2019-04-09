import React, { useState } from "react";
import styled from "styled-components";
// styles
import "./app.css";
// comps
import Example1 from "./examples/Example1";
import Example2 from "./examples/Example2";
import Example3 from "./examples/Example3";
import Example4 from "./examples/Example4";
import Example5 from "./examples/Example5";
import Example6 from "./examples/Example6";
import Example7 from "./examples/Example7";
import Example8 from "./examples/Example8";
import Example9 from "./examples/Example9";
import Example10 from "./examples/Example10";
import Example11 from "./examples/Example11";
import Example12 from "./examples/Example12";
import ExampleContainer from "./ExampleContainer";
import FloatingToggle from "./components/FloatingToggle";

const App = () => {
  const [toggleOn, setToggleOn] = useState(true);

  return (
    <div className="app">
      <FloatingToggle
        isToggled={toggleOn}
        onToggle={isOn => setToggleOn(isOn)}
      />

      <Header>
        <h1>Learning react-spring</h1>
        <p>These are my notes while getting to grips with react-spring.</p>
        <p>
          Writing this up is my way of getting my head round what's going on.
        </p>
      </Header>

      <Section>
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

        <ExampleContainer title={"Example 1 - fade in/out"}>
          <Example1 toggleOn={toggleOn} />
        </ExampleContainer>

        <ExampleContainer title={"Example 2 - svg path"}>
          <Example2 toggleOn={toggleOn} />
        </ExampleContainer>

        <ExampleContainer
          title={"Example 3 - animated value as text"}
          notes={
            "This works fine, but if you add in other text it breaks.  See part 2 for more on this."
          }
        >
          <Example3 toggleOn={toggleOn} />
        </ExampleContainer>

        <ExampleContainer title={"Example 4"}>
          <Example4 toggleOn={toggleOn} />
        </ExampleContainer>

        <ExampleContainer
          title={"Example 5"}
          notes={
            "I had problems with this one.  To pass animated props into a child component you either need that child to be a class component, or you use animated within that child."
          }
        >
          <Example5 toggleOn={toggleOn} />
        </ExampleContainer>
      </Section>

      <Section>
        <SectionHeader>
          <h2>
            Part 2: Passing animated values to children{" "}
            <a href="https://www.react-spring.io/docs/hooks/basics">
              docs Basics section
            </a>
          </h2>
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

        <ExampleContainer
          title={"Example 6 - passing animated values to child components"}
          notes={
            "I finally figured out that you can use as many children as you like but if they display animated values they need to use the animated.[element] syntax."
          }
        >
          <Example6 toggleOn={toggleOn} />
        </ExampleContainer>

        <h2>
          Part 3: Colours{" "}
          <a href="https://www.react-spring.io/docs/hooks/basics">
            Playing with different colour types.
          </a>
        </h2>

        <ExampleContainer title={"Example 7 - hsl"}>
          <p>
            The spaces at the start and end of the brackets are intentional. If
            I remove them it seems to convert the colour to rgba which works
            fine, but is confusing for the text.
          </p>
          <Example7 toggleOn={toggleOn} />
        </ExampleContainer>

        <ExampleContainer title={"Example 8 - rgb"}>
          <Example8 toggleOn={toggleOn} />
        </ExampleContainer>

        <ExampleContainer title={"Example 9 - linear gradient"}>
          <Example9 toggleOn={toggleOn} />
        </ExampleContainer>

        <ExampleContainer title={"Example 10 - diagonal gradient"}>
          <Example10 toggleOn={toggleOn} />
        </ExampleContainer>

        <ExampleContainer title={"Example 11 - three colour gradient"}>
          <Example11 toggleOn={toggleOn} />
        </ExampleContainer>

        <ExampleContainer title={"Example 12 - Radial gradient"}>
          <Example12 toggleOn={toggleOn} />
        </ExampleContainer>
      </Section>
    </div>
  );
};

export default App;

const Header = styled.div`
  margin-bottom: 60px;
`;

const Section = styled.div`
  margin-bottom: 120px;
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;
`;
