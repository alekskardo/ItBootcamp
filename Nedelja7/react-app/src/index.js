import React from "react";
import ReactDOM from "react-dom";
import Forma from "./components/Forma";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Forma str={"klikni"} />
      <Card
        string={"Dragon ball"}
        url={
          "https://www.xboxrepublika.com/wp-content/uploads/2020/01/193FGhdss645srgQwQ25gTrrr18.jpg"
        }
      />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
