import { useState } from "react"

export default function Background(){

    const [bgColor, setBgColor] = useState();

    const handleRedButtonClick = () => {setBgColor('red');
    document.body.style.backgroundColor = 'red';};

    const handleBlueButtonClick = () => {setBgColor('blue');
    document.body.style.backgroundColor = 'blue';};

    return(
        
        <div style={{ backgroundColor: bgColor }}>
            
            <button onClick={handleRedButtonClick}>Red</button>
            <button onClick={handleBlueButtonClick}>Blue</button>

        </div>

    )
}   