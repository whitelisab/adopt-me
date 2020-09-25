import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.js";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Lundy",
      animal: "Dog",
      breed: "Border Terrier",
    }),
    React.createElement(Pet, {
      name: "Madison",
      animal: "Dog",
      breed: "Westie",
    }),
    React.createElement(Pet, {
      name: "Hawthorne",
      animal: "Cat",
      breed: "Orange Tabby",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
