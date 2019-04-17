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
      <CreditList>
        {creditsData.map(credit => {
          return (
            <CreditItem key={credit.title} href={credit.url}>
              <h2>{credit.title}</h2>
            </CreditItem>
          );
        })}
      </CreditList>
    </Outer>
  );
};

export default Credits;

const Outer = styled.div`
  border-top: 1px solid black;
  margin-top: 60px;
  padding: 20px 20px 160px 20px;
  background: #303030;
  color: whitesmoke;
`;

const CreditList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CreditItem = styled.a`
  padding: 5px 10px;
  color: whitesmoke;

  h2 {
    font-size: 18px;
  }
`;

const creditsData = [
  { title: "React", url: "https://reactjs.org/" },
  { title: "VSCode", url: "https://code.visualstudio.com/" },
  { title: "Netlify", url: "https://www.netlify.com/" },
  { title: "Github", url: "https://github.com/" },
  { title: "Code Sandbox", url: "https://codesandbox.io/" },
  { title: "react-spring", url: "https://www.react-spring.io/" },
  { title: "styled-components", url: "https://www.styled-components.com/" },
  { title: "react-markdown", url: "https://rexxars.github.io/react-markdown/" },
  {
    title: "react-syntax-highlighter",
    url: "https://github.com/conorhastings/react-syntax-highlighter"
  },
  {
    title: "Google dev tools",
    url: "https://developers.google.com/web/tools/chrome-devtools/"
  },
  {
    title: "Firefox grid inspector",
    url:
      "https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts"
  },
  {
    title: "Spectrum chat",
    url: "https://spectrum.chat/react-spring?tab=posts"
  }
];
