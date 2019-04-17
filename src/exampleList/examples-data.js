import Example1, { md as eg1Md } from "./examples/Example1";
import Example2, { md as eg2Md } from "./examples/Example2";
import Example3, { md as eg3Md } from "./examples/Example3";
import Example4, { md as eg4Md } from "./examples/Example4";
import Example5, { md as eg5Md } from "./examples/Example5";
import Example6, { md as eg6Md } from "./examples/Example6";
import Example7, { md as eg7Md } from "./examples/Example7";
import Example8, { md as eg8Md } from "./examples/Example8";
import Example9, { md as eg9Md } from "./examples/Example9";
import Example10, { md as eg10Md } from "./examples/Example10";
import Example11, { md as eg11Md } from "./examples/Example11";
import Example12, { md as eg12Md } from "./examples/Example12";
import Example13, { md as eg13Md } from "./examples/Example13";

export const examplesData = [
  {
    number: 1,
    Comp: Example1,
    code: eg1Md,
    title: "fade in/out",
    notes: ""
  },
  {
    number: 2,
    Comp: Example2,
    code: eg2Md,
    title: "svg path",
    notes: ""
  },
  {
    number: 3,
    Comp: Example3,
    code: eg3Md,
    title: "animated value as text",
    notes:
      "If you want to mix with other text or alter the animated value (e.g. restrict the decimals) you need to use interpolate. [(thanks for the tip Paul)](https://twitter.com/artflychris/status/1115637329681633281)"
  },
  {
    number: 4,
    Comp: Example4,
    code: eg4Md,
    title: "scroll",
    notes:
      "The amount I'm scrolling is a fudge - just tried different values until it hit the bottom at an ok speed! Need to work out how to scroll to dynamic points e.g. headings etc."
  },
  {
    number: 5,
    Comp: Example5,
    code: eg5Md,
    title: "animating children",
    notes:
      "I had problems with this one.  To pass animated props into a child component you either need that child to be a class component, or you use animated within that child."
  },
  {
    number: 6,
    Comp: Example6,
    code: eg6Md,
    title: "passing animated values to child components",
    notes:
      "I finally figured out that you can use as many children as you like but if they display animated values they need to use the animated.[element] syntax.  Perhaps this should have been obvious, but I kinda thought child elements would somehow inherit animated values."
  },
  {
    number: 7,
    Comp: Example7,
    code: eg7Md,
    title: "colour - hsl",
    notes:
      "The spaces at the start and end of the brackets are intentional. If I remove them it seems to convert the colour to rgba which works fine, but is confusing for the text."
  },
  {
    number: 8,
    Comp: Example8,
    code: eg8Md,
    title: "colour - rgb",
    notes: ""
  },
  {
    number: 9,
    Comp: Example9,
    code: eg9Md,
    title: "linear gradient",
    notes: ""
  },
  {
    number: 10,
    Comp: Example10,
    code: eg10Md,
    title: "diagonal gradient",
    notes: ""
  },
  {
    number: 11,
    Comp: Example11,
    code: eg11Md,
    title: "three colour gradient",
    notes: ""
  },
  {
    number: 12,
    Comp: Example12,
    code: eg12Md,
    title: "Radial gradient",
    notes: ""
  },
  {
    number: 13,
    Comp: Example13,
    code: eg13Md,
    title: "Grid Layout",
    notes:
      "Wow, learning a lot in this one. As well as react-spring I'm Learning about css grid layout for the first time and the awesome Firefox grid inspector! [(see Mozilla grid layout guide)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)"
  }
];
