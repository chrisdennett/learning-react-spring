import React from "react";
import styled from "styled-components";
// ui
import "@material/switch/dist/mdc.switch.css";
import { Switch } from "@rmwc/switch";

const FloatingToggle = ({ onToggle, isToggled }) => {
  return (
    <ToggleContainer>
      <Switch checked={isToggled} onChange={e => onToggle(e.target.checked)}>
        TOGGLE Springs
      </Switch>
    </ToggleContainer>
  );
};

export default FloatingToggle;

const ToggleContainer = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  background: #f1c40f;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 1px 2px 6px 2px rgba(0, 0, 0, 0.41);
`;
