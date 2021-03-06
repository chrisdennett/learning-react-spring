import React from "react";
import styled from "styled-components";
import "@rmwc/icon/icon.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import { IconButton } from "@rmwc/icon-button";

const Toggle = ({ icon, onToggle, isOn = true, label, style }) => {
  return (
    <ToggleOuter
      style={style}
      isOn={isOn}
      icon={icon}
      label={label}
      onClick={() => onToggle(!isOn)}
    >
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
  border-radius: ${props => (props.label ? "5px" : "50%")};
  /* border-width: 1px; */
  /* border-style: solid; */
  /* border-color: ${props => (props.isOn ? darkColour : lightColour)}; */
  background: ${props => (props.isOn ? lightColour : darkColour)};
  color: ${props => (props.isOn ? darkColour : lightColour)};
  min-width: 48px;
  padding: ${props => (props.icon ? 0 : "8px")};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ToggleContent = styled.div`
  user-select: none;
`;
