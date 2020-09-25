const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
