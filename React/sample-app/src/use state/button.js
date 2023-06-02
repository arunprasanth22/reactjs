import { useState } from "react";

export default function Button(){

    const [buttonColor, setButtonColor] = useState();
    const handleClick = (color) => {setButtonColor(color)};

    return(
        <>
        
        <button style={{ backgroundColor: buttonColor === 'red' ? 'red' : '' }} onClick={() => handleClick('red')}>Red</button>
        <button style={{ backgroundColor: buttonColor === 'blue' ? 'blue' : '' }} onClick={() => handleClick('blue')}>Blue</button>
        <button style={{ backgroundColor: buttonColor === 'green' ? 'green' : '' }} onClick={() => handleClick('green')}>Green</button>
        <button style={{ backgroundColor: buttonColor === 'yellow' ? 'yellow' : '' }} onClick={() => handleClick('yellow')}>Yellow</button>

        </>
    )
}