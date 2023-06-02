import { useState } from "react"

export default function Newcalc(){

    const Calculator = () => {const [inputValue, setInputValue] = useState();}
    const handleNumberClick = (value) => {setInputValue(inputValue + value);}
    const handleClearClick = () => {setInputValue("");}
    const handleEqualClick = () => {
        try {
          const result = eval(inputValue);
          setInputValue(result);
        } catch (error) {
          setInputValue("Error");
        }
      };
    
    return(
    <div>
        <input type="text" value={inputValue} readOnly />
        <div>
            <button onClick={() => handleNumberClick("1")}>1</button>
            <button onClick={() => handleNumberClick("2")}>2</button>
            <button onClick={() => handleNumberClick("3")}>3</button>
            <button onClick={() => handleNumberClick("+")}>+</button>
        </div>

        <div>
            <button onClick={() => handleNumberClick("4")}>4</button>
            <button onClick={() => handleNumberClick("5")}>5</button>
            <button onClick={() => handleNumberClick("6")}>6</button>
            <button onClick={() => handleNumberClick("-")}>-</button>
        </div>
        
        <div>
            <button onClick={() => handleNumberClick("7")}>7</button>
            <button onClick={() => handleNumberClick("8")}>8</button>
            <button onClick={() => handleNumberClick("9")}>9</button>
            <button onClick={() => handleNumberClick("*")}>*</button>
        </div>
        
        <div>
            <button onClick={() => handleClearClick()}>C</button>
            <button onClick={() => handleNumberClick("0")}>0</button>
            <button onClick={() => handleEqualClick()}>=</button>
            <button onClick={() => handleNumberClick("/")}>/</button>
        </div>
    </div>
    )
}