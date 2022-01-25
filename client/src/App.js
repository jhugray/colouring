import React, { useState }  from "react";
import './App.css';
import { GithubPicker } from 'react-color';

function App() {
  const [currentColour, setColour] = useState("#B80000");
  console.log(currentColour)

  return (
    <div className="App">
      <header>
      <h1 >
      <p style={{color:currentColour}}>Colour</p>
      <p style={{color:currentColour}}>Harmony</p>
      <p style={{color:currentColour}}>Blend</p>
      </h1>
      </header>
      <div>
      <GithubPicker 
      color={currentColour}
      onChangeComplete={color => {setColour(color.hex)}}
      width="200px" 
      colors={['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']}
      triangle="hide" 
      // onSwatchHover
      />
      </div>
    </div>
  );
}

export default App;
