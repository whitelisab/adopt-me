import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.js";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Lundy" animal="Dog" breed="Border Terrier" />
      <Pet name="Madison" animal="Dog" breed="Westie" />
      <Pet name="Hawthorne" animal="Cat" breed="Orange Tabby" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
