import React from "react";
import styled from "styled-components";
import "@rmwc/icon/icon.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import { IconButton } from "@rmwc/icon-button";

const Toggle = ({ icon, onToggle, isOn = true, label }) => {
  console.log("label: ", label);

  return (
    <ToggleOuter isOn={isOn}>
      <ToggleContent>
        {icon && <IconButton icon={icon} label="Rate this!" />}

        {label && <span>{label.toUpperCase()}</span>}
      </ToggleContent>
    </ToggleOuter>
  );
};

export default Toggle;

const darkColour = "#303030";
const lightColour = "whitesmoke";

const ToggleOuter = styled.div`
  margin: 5px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isOn ? lightColour : darkColour)};
  background: ${props => (props.isOn ? darkColour : "none")};
  color: ${props => (props.isOn ? lightColour : darkColour)};
  min-width: 48px;
  padding: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ToggleContent = styled.div`
  user-select: none;
`;
