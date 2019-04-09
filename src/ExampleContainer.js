import React from "react";
import styled from "styled-components";

const ExampleContainer = ({ children, title, notes }) => {
  return (
    <Container>
      <Blurb>
        <Title>{title}</Title>
        {notes && <p>{notes}</p>}
      </Blurb>
      <Content>{children}</Content>
    </Container>
  );
};

export default ExampleContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
`;

const Blurb = styled.div`
  margin-bottom: 5px;
`;

const Title = styled.h3`
  background: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
  font-weight: normal;
  padding: 10px;
  margin: 0;
`;

const Content = styled.div`
  margin-bottom: 0px;
`;
