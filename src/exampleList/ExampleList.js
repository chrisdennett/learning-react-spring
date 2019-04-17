import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
// comps
import CodeBlock from "./CodeBlock";
import { examplesData } from "./examples-data";

const ExampleList = ({ showCode, toggleOn }) => {
  return (
    <ExamplesListOuter showCode={showCode}>
      {examplesData.map(eg => {
        const { title, Comp, number, notes, code } = eg;
        return (
          <ExampleCell key={number}>
            <NumberCorner>
              <polygon points={`0,0, 35,0, 0,35`} />
              <text x={6} y={15} fill="black">
                {number}
              </text>
            </NumberCorner>

            <Example>
              <Comp toggleOn={toggleOn} />
            </Example>

            <ExampleTitle>{title}</ExampleTitle>

            {notes && <ReactMarkdown>{notes}</ReactMarkdown>}

            {code && showCode && <CodeBlock value={code} />}
          </ExampleCell>
        );
      })}
    </ExamplesListOuter>
  );
};

export default ExampleList;

const ExamplesListOuter = styled.div`
  display: grid;

  grid-gap: 8px;
  row-gap: ${props => (props.showCode ? "80px" : "30px")};

  grid-template-columns: ${props =>
    props.showCode
      ? "repeat(auto-fill, minmax(100%, 1fr))"
      : "repeat(auto-fill, minmax(250px, 1fr))"};

  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
`;

const ExampleCell = styled.div`
  display: grid;
  grid-template-columns: 3;
  grid-template-rows: 250px 35px auto auto;
  position: relative;
`;

const Example = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
  background: whitesmoke;
  border-radius: 3px;
`;

const ExampleTitle = styled.h2`
  font-weight: normal;
  font-size: 18px;
  margin: 0;
  color: white;
  padding: 5px 20px;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
`;

const NumberCorner = styled.svg`
  top: 0;
  left: 0;
  position: absolute;
  width: 35px;
  height: 35px;

  text {
    fill: white;
    font-size: 12px;
  }

  polygon {
    fill: rgba(0, 0, 0, 0.7);
  }
`;
