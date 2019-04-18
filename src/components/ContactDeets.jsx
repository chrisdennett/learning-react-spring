import React from "react";
import styled from "styled-components";
import SocialMediaLinks from "./SocialMediaLinks.jsx";
import Link from "./Link";

const ContactDeets = () => {
  return (
    <Outer>
      <SocialMediaLinks iconSize={32} />
      <StyledDiv url={"https://www.chrisdennett.co.uk/"}>
        chrisdennett.co.uk
      </StyledDiv>
      <StyledDiv url={"mailto:chrisdennett@gmail.com"}>
        chrisdennett@gmail.com
      </StyledDiv>
    </Outer>
  );
};

export default ContactDeets;

const Outer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled(Link)`
  padding: 5px 0;
`;
