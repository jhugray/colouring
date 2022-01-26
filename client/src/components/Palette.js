import React from 'react';

const Palette = (props) => {

    const colours = ['red', 'blue', 'yellow', 'green']

    return(
        <div className="palette">
            {colours.map(colour => { 
                const activeClass = props.currentColour === colour ? "colour-swatch-active" : "";
                return (
                    <div onClick={() => {props.changeColour(colour)}} key={colour}>
                        <div className={`colour-swatch ${activeClass}`}  style={{backgroundColour: colour}}></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Palette;