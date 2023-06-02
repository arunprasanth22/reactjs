import axios from "axios";
import { useEffect, useState } from "react"
import { API } from "./api";

export default function All()
{

    const [name,setname]=useState('');

    const event=(e)=>{
        e.preventDefault();
    }

    const h=()=>{
        console.log(name);
        axios.post('https://6464c448127ad0b8f8a75b2b.mockapi.io/sample',{person:name})
        setname('')
    }

    const [display,setdisplay]=useState([]);

    useEffect(()=>{
        axios.get('https://6464c448127ad0b8f8a75b2b.mockapi.io/sample').then((ab)=>{
            setdisplay(ab.data)
        })
    },[ ])

    const del=(ef)=>{
        axios.delete(`${API}/${ef}`).then(()=>{
            axios.get('https://6464c448127ad0b8f8a75b2b.mockapi.io/sample').then((gh)=>{
                setdisplay(gh.data)
            })
        })
    }
    
    return(
        <>
        <h1>Hello,{name}</h1>
            <form onSubmit={event}>
                <input type="text" value={name} onChange={(a)=>setname(a.target.value)} />
                <button onClick={h}>Submit</button>
            </form>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Operation</th>
                </tr>
                {display.map((cd)=>
                <tr>
                    <td>
                        {cd.id}
                    </td>
                    <td >
                        {cd.person}
                    </td>
                    <td >
                        <button onClick={()=>del(cd.id)}>Del</button>
                    </td>
                </tr>)}
            </table>
        </>
    )
}