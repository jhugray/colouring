import React from 'react';

const Palette = ({currentColour, changeColour}) => {

    const colours = ['red', 'blue', 'yellow', 'green']

    return(
        <div className="palette">
            {colours.map(colour => { 
                const activeClass = currentColour === colour ? "colour-swatch-active" : "";
                return (
                    <div onClick={() => {changeColour(colour)}} key={colour}>
                        {/* backgroundColor can not have a u */}
                        <div className={`colour-swatch ${activeClass}`}  style={{backgroundColor: colour}}></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Palette;

// How to update from Old style to modern

// export default function Palette(props) {

//     const colours = ['red', "blue", 'yellow', 'green']

//     return(
//         <div className="palette">
//             {colours.map(colour => { 
//                 const activeClass = props.currentColour === colour ? "colour-swatch-active" : "";
//                 return (
//                     <div onClick={() => {props.changeColour(colour)}} key={colour}>
//                         <div className={`colour-swatch ${activeClass}`}  style={{backgroundColor: colour}}></div>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }