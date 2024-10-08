import { useState, useEffect } from "react";

import "./App.css";

function ColorBox({ title, color }) {
  console.log("ColorBox is about to be rendered.");

  useEffect(() => {
    console.log("ColorBox has really been mounted.");

    return () => {
      console.log("ColorBox has been unmounted.");
    };
  }, []);

  useEffect(() => {
    console.log("ColorBox has changed color");
  }, [color]);

  useEffect(() => {
    console.log("ColorBox has changed title");
  }, [title]);

  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <h2>{title}</h2>
    </div>
  );
}

function App() {
  const [color, setColor] = useState("red");
  const [title, setTitle] = useState("MyTitle");
  const [isColorBoxVisible, setIsColorBoxVisible] = useState(true);

  function handleToggleColor() {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }
  function handleToggleTitle() {
    if (title === "MyTitle") {
      setTitle("YourTitle");
    } else {
      setTitle("MyTitle");
    }
  }
  function handleMountColorBox() {
    setIsColorBoxVisible(!isColorBoxVisible);
  }

  return (
    <div className="container">
      {isColorBoxVisible ? (
        <ColorBox title={title} color={color} />
      ) : (
        <p>Hier ist keine ColorBox mehr</p>
      )}
      <button onClick={() => handleToggleColor()}>Toggle color</button>
      <button onClick={() => handleToggleTitle()}>Toggle title</button>
      <button onClick={() => handleMountColorBox()}>
        {isColorBoxVisible ? "Unmount ColorBox" : "Mount ColorBox"}
      </button>
    </div>
  );
}

export default App;
