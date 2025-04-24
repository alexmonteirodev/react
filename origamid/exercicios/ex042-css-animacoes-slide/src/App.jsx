import React from "react";
import Slide from "./Slide";

const App = () => {
  const slides = [
    {
      id: "slide1",
      text: "slide 1",
    },
    {
      id: "slide2",
      text: "slide 2",
    },
    {
      id: "slide3",
      text: "slide 3",
    },
  ];

  return (
    <>
      <Slide slides={slides} />
    </>
  );
};

export default App;
