import React from "react";
import styled from "styled-components";
// comps
import Toggle from "./Toggle";
import AnimationTimer from "./AnimationTimer";

const AppBar = ({
  showCodeChange,
  showNotesChange,
  toggleChange,
  toggleListView,
  listView,
  animConfig,
  toggleOn,
  showNotes,
  showCode
}) => {
  return (
    <AppBarOuter>
      <AppBarInner>
        <div>
          <Toggle
            label={"notes"}
            onToggle={showNotesChange}
            isOn={showNotes}
            style={{ marginRight: 10 }}
          />
          <Toggle label={"code"} onToggle={showCodeChange} isOn={showCode} />
        </div>

        <div>
          <AnimationTimer
            animConfig={animConfig}
            toggleOn={toggleOn}
            toggleChange={toggleChange}
          />
        </div>

        <div>
          <Toggle
            icon={"view_list"}
            onToggle={toggleListView}
            isOn={listView}
          />
          <Toggle
            icon={"view_module"}
            onToggle={value => toggleListView(!value)}
            isOn={!listView}
          />
        </div>
      </AppBarInner>
    </AppBarOuter>
  );
};

export default AppBar;

const AppBarOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background: #303030;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
`;

const AppBarInner = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// const Label = styled.div`
//   color: rgba(255, 255, 255, 0.2);
//   margin: 5px;
// `;
