import { useState } from "react"

export default function Map()
{
    const [name,setName]=useState(['siva','arun','1234567'])
    
    const[num,setNum]=useState(['siva'])

    const abcd=()=>{

        // setNum('arun')

        //spread operator

        setNum(names=>[...names,'arun','siva'])
    }
   

    return(
        <>
        
        <ul>
            {name.map((e)=>
            <li key={e}>{e}</li>
            )}
        </ul>

        {num.map((arun)=>
        <ul>
            <li>
                {arun}
            </li>
        </ul>)}

        <h1>{num}</h1>

        <button onClick={abcd}>Change</button>

        </>
    )
}