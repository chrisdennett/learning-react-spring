import React from "react";
import styled from 'styled-components';

const ExampleContainer = ({ children, title, notes }) => {
  
  return (
    <Container>
      <Blurb>
        <Title>{title}</Title>
        <p>{notes}</p>
      </Blurb>
      <Content>{children}</Content>
    </Container>
  );
};

export default ExampleContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Blurb = styled.div`
  margin-bottom: 5px;
`;

const Title = styled.h2`
  border-bottom: 1px solid rgba(0,0,0,0.2);
  padding-bottom: 10px;
  margin: 0;
  `;

  const Content = styled.div`
    margin-bottom: 30px;
  `;