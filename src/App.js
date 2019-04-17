import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
// styles
import "./app_styles.css";
// comps
import FloatingToggle from "./components/FloatingToggle";
import Credits from "./components/Credits";
import AppBar from "./components/appBar/AppBar";
import ExampleList from "./exampleList/ExampleList";

const App = () => {
  const [toggleOn, setToggleOn] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const animConfig = { ...config.slow };

  const props = useSpring({
    opacity: toggleOn ? 1 : 0,
    delay: 200,
    config: animConfig,
    onRest: () => setToggleOn(!toggleOn)
  });

  return (
    <div className="app">
      <AppBar
        showCode={showCode}
        showNotes={showNotes}
        showCodeChange={show => setShowCode(show)}
        showNotesChange={show => setShowNotes(show)}
      />

      <animated.div style={props}>I will fade in</animated.div>

      {/* <FloatingToggle
        isToggled={toggleOn}
        onToggle={isOn => setToggleOn(isOn)}
      />

      <FloatingToggle
        left={200}
        isToggled={showCode}
        onToggle={isOn => setShowCode(isOn)}
      /> */}

      <Header>
        <h1>Learning react-spring</h1>
        <p>These are my notes while getting to grips with react-spring.</p>
        <p>
          Writing this up is my way of getting my head round what's going on.
        </p>
      </Header>

      <ExampleList
        toggleOn={toggleOn}
        showCode={showCode}
        showNotes={showNotes}
        config={animConfig}
      />

      <Credits />
    </div>
  );
};

export default App;

const Header = styled.div`
  margin-bottom: 60px;
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
