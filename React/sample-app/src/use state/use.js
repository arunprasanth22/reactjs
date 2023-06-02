// import { useState } from "react"

import { useState } from "react"

// export default function Use(){

//     const [name,setName]=useState('siva')

//     const h=()=>{
//         setName('arun');
//     }

//     return(
//         <>
//         <h1>{name}</h1>
//         <button onClick={h}>ok</button>
//         </>
//     )
// }

export default function Use(){

    const [num,setNum]=useState(0);

    const x=()=>{
        setNum(num+1);
    }

    const y=()=>{
        setNum(num-1);
    }

    const z=()=>{
        setNum(0);
    }

    return(
        <>

        <button onClick={x}>Add</button>
        <h1>{num}</h1>
        <button onClick={y}>Sub</button><br/><br/>
        <button onClick={z}>Reset</button><br/><br/>
        <button onClick={x}>{num}</button>

        </> 
    )
}