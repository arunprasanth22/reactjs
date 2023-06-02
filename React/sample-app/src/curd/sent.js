import { useState } from "react";

export default function Sent()
{
    const [name,setname]=useState("")
    const a=(e)=>{
        e.preventDefault();
    }
    const b=()=>{
        // console.log('hai');

    }
    return(
        <>
        <h1>Hello, {name}</h1>
        <form onSubmit={a}>
        <input type="text" value={name} onChange={(c)=>setname(c.target.value)}/>
        <button onClick={b}>Submit</button>

        </form>
        
        </>
    )
}