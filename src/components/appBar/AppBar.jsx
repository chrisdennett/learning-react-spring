import React from "react";
import styled from "styled-components";
// comps
import Toggle from "./Toggle";

const AppBar = ({ showCodeChange, showNotesChange, showNotes, showCode }) => {
  return (
    <AppBarOuter>
      <Label>SHOW:</Label>
      <Toggle label={"notes"} onToggle={showNotesChange} isOn={showNotes} />
      <Toggle label={"code"} onToggle={showCodeChange} isOn={showCode} />
    </AppBarOuter>
  );
};

export default AppBar;

const AppBarOuter = styled.div`
  position: fixed;
  padding: 10px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background: #303030;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  color: rgba(255, 255, 255, 0.5);
  margin: 5px;
`;
