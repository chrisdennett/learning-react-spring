import React from "react";
import styled from "styled-components";

const Credits = () => {
  return (
    <Outer>
      <h1>Credits</h1>
      <p>
        I always mean to include a list of all the various tools and things I've
        used in projects. I've not gone made with it and included every website
        I've googled for an answer, but here are the key things I've used.
      </p>
      <ul>
        {creditsData.map(credit => {
          return (
            <div key={credit.title}>
              <h2>{credit.title}</h2>
            </div>
          );
        })}
      </ul>
    </Outer>
  );
};

export default Credits;

const Outer = styled.div`
  background: #111111;
`;

const creditsData = [
  { title: "React" },
  { title: "VSCode" },
  { title: "Netlify" },
  { title: "Github" },
  { title: "Code Sandbox" },
  { title: "react-spring" },
  { title: "styled-components" },
  { title: "react-markdown" },
  { title: "react-syntax-highlighter" },
  { title: "Google search" },
  { title: "Google dev tools" },
  { title: "Firefox grid inspector" },
  { title: "Twitter" },
  { title: "Spectrum chat" }
];
