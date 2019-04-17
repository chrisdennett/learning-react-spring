import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language = "jsx", value }) => {
  return (
    <>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        showLineNumbers={false}
        customStyle={{ margin: 0, borderRadius: 0, maxHeight: 250 }}
      >
        {value}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeBlock;
