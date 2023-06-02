import axios from "axios";
import { useState } from "react";

export default function Create()
{
    const [name,setname]=useState("")
    const a=(e)=>{
        e.preventDefault();
    }
    const b=()=>{
        // console.log('hai');
        axios.post('https://6464c448127ad0b8f8a75b2b.mockapi.io/db',{PersonName:name});
        setname('');
        
    }
    return(
        <>
        <h1>Hai, {name}</h1>
        <form onSubmit={a}>
        <input type="text" value={name} onChange={(c)=>setname(c.target.value)}/>
        <button onClick={b}>Submit</button>

        </form>
        
        </>
    )
}