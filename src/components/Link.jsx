import React from "react";
import styled from "styled-components";

const Link = ({ url, children, className }) => {
  return (
    <StyledA
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </StyledA>
  );
};

export default Link;

const StyledA = styled.a`
  color: white;
`;
