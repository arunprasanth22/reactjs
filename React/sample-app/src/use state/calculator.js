import { useState } from "react"

export default function Calculator(){

    const [result, setResult] = useState();
    const handleClick = (value) => {setResult(result + value);}
    const handleClear = () => {setResult('');}
    const handleCalculate = () => {
        try {
          setResult(eval(result).toString());
        } catch (error) {
          setResult('Error');
        }
      }
    
    return(
    <div className="calculator">
        <div className="display">{result || '0'}</div>
        <div className="buttons">
            <button className="clear" onClick={handleClear}>C</button>
            <button onClick={() => handleClick('/')}>/</button>
            <button onClick={() => handleClick('*')}>*</button>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('+')}>+</button>
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button className="equal" onClick={handleCalculate}>=</button>
            <button className="zero" onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('.')}>.</button>
        </div>
    </div>

    )
}