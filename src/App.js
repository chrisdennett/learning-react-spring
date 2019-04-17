import React, { useState } from "react";
import styled from "styled-components";
import { config } from "react-spring";
// styles
import "./app_styles.css";
// comps
import Credits from "./components/Credits";
import AppBar from "./components/appBar/AppBar";
import ExampleList from "./exampleList/ExampleList";

const App = () => {
  const [listView, setListView] = useState(false);
  const [toggleOn, setToggleOn] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const animConfig = { ...config.slow };

  return (
    <div className="app">
      <AppBar
        animConfig={animConfig}
        toggleOn={toggleOn}
        showCode={showCode}
        showNotes={showNotes}
        listView={listView}
        toggleListView={value => setListView(value)}
        toggleChange={value => setToggleOn(value)}
        showCodeChange={value => setShowCode(value)}
        showNotesChange={value => setShowNotes(value)}
      />

      <Header>
        <h1>Learning react-spring</h1>
        <ul>
          <li>
            These are my experiments / notes while getting to grips with
            react-spring.
          </li>
          <li>
            Writing this up is my way of getting my head round what's going on!
          </li>
          <li>
            I'm a newbie with "react-spring" and I'm also just stating to learn
            "styled-components", "react-markdown", "react-syntax-highlighter"
            and "css grid" so my code may contain badness!
          </li>
        </ul>
      </Header>

      <ExampleList
        listView={listView}
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
  font-size: 120%;
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
