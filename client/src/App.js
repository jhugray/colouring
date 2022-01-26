import React, { useState } from "react";
import "./App.css";
import { GithubPicker } from "react-color";
import Palette from "./components/Palette";

//Turn on only 1 at a time or colours will overlap
import StarTrio from "./components/StarTrio.js"


function App() {
  //For react-color front test
  const [currentColour, setColour] = useState("#B80000");
  console.log(currentColour);

  // For flower premade pallet part
  const [fillcolours, setFillcolours] = useState(Array(57).fill("white"));
  const [currentcolour, setCurrentcolour] = useState("blue");

  const onFillcolour = (i) => {
    let newFillcolours = fillcolours.slice(0);
    newFillcolours[i] = currentcolour;
    setFillcolours(newFillcolours);
  };
  return (
    <div className="App">
      <header>
        <h1>
          <p style={{ colour: currentColour }}>Colour</p>
          <p style={{ colour: currentColour }}>Harmony</p>
          <p style={{ colour: currentColour }}>Blend</p>
        </h1>
      </header>
      <div>
        <GithubPicker
          colour={currentColour}
          onChangeComplete={(colour) => {
            setColour(colour.hex);
          }}
          width="200px"
          colours={['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']}
          triangle="hide"
          // onSwatchHover
        />
      </div>
      <div>
        {/* Flower loads but is getting errors with this code */}
        <StarTrio fillcolours={fillcolours} onFill={onFillcolour} />
      </div>
      <div>
        {/* colour pallette doesn't show up yet */}
        <Palette
          currentcolour={currentcolour}
          changecolour={setCurrentcolour}
        />
      </div>
    </div>
  );
}

export default App;
