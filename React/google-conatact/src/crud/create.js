import axios from "axios";
import { useState } from "react"

 export default function Create(){
    const [name,setname]=useState('');

    const h=(e)=>{
            e.preventDefault();
        axios.post('http://localhost:300/',{name:name})
            setname('')    
    }
    return(
        <div>


        <form onSubmit={h}>

            <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
            <input type="submit"/>
        </form>

        </div>
    )
 }