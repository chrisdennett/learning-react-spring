import React, { useState } from "react";
// styles
import "./app.css";
// ui
import "@material/switch/dist/mdc.switch.css";
import { Switch } from "@rmwc/switch";
// comps
import Example1 from "./examples/Example1";
import Example2 from "./examples/Example2";
import Example3 from "./examples/Example3";
import Example4 from "./examples/Example4";
import Example5 from "./examples/Example5";
import Example6 from "./examples/Example6";
import ExampleContainer from "./ExampleContainer";

const App = () => {
  const [toggleOn, setToggleOn] = useState(true);

  const toggleStyle = {
    position: "fixed",
    top: 10,
    left: 10,
    background: "#f1c40f",
    padding: 10,
    borderRadius: 4,
    boxShadow: "1px 2px 6px 2px rgba(0,0,0,0.41)"
  };

  return (
    <div className="app">
      <heading>
        <h1>Learning react-spring</h1>
        <p>My notes while getting to grips with react-spring.</p>
      </heading>

      <div style={toggleStyle}>
        <Switch
          checked={toggleOn}
          onChange={e => setToggleOn(e.target.checked)}
        >
          TOGGLE Springs
        </Switch>
      </div>

      <ExampleContainer title={"Example 1"}>
        <Example1 toggleOn={toggleOn} />
      </ExampleContainer>

      <ExampleContainer title={"Example 2"}>
        <Example2 toggleOn={toggleOn} />
      </ExampleContainer>

      <ExampleContainer title={"Example 3"}>
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

      <ExampleContainer
        title={"Example 6"}
        notes={
          "I had problems with this one.  To pass animated props into a child component you either need that child to be a class component, or you use animated within that child."
        }
      >
        <Example6 toggleOn={toggleOn} />
      </ExampleContainer>
    </div>
  );
};

export default App;
