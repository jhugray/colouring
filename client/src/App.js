import React, { useState } from "react";
import "./App.css";
import { GithubPicker } from "react-color";
import ColorPalette from "./components/ColorPalette";

//Turn on only 1 at a time or colours will overlap
import Flower from "./components/Flower";
// import Cat from './components/cheshire'
// import House from './components/family-house-facade'

function App() {
  //For react-color front test
  const [currentColour, setColour] = useState("#B80000");
  console.log(currentColour);

  // For flower premade pallet part
  const [fillColors, setFillColors] = useState(Array(57).fill("white"));
  const [currentColor, setCurrentColor] = useState("blue");

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  };
  return (
    <div className="App">
      <header>
        <h1>
          <p style={{ color: currentColour }}>Colour</p>
          <p style={{ color: currentColour }}>Harmony</p>
          <p style={{ color: currentColour }}>Blend</p>
        </h1>
      </header>
      <div>
        <GithubPicker
          color={currentColour}
          onChangeComplete={(color) => {
            setColour(color.hex);
          }}
          width="200px"
          colors={['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']}
          triangle="hide"
          // onSwatchHover
        />
      </div>
      <div>
        {/* Flower loads but is getting errors with this code */}
        <Flower fillColors={fillColors} onFill={onFillColor} />
      </div>
      <div>
        {/* Color pallette doesn't show up yet */}
        <ColorPalette
          currentColor={currentColor}
          changeColor={setCurrentColor}
        />
      </div>
    </div>
  );
}

export default App;
