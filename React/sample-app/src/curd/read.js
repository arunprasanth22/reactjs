import axios from "axios";
import { useEffect, useState } from "react"

export default function Read()
{
    const [display,setdisplay]=useState([]);

    useEffect(()=>{
        axios.get('https://6464c448127ad0b8f8a75b2b.mockapi.io/db').then((e)=>{
            setdisplay(e.data)
            // console.log(e.data)
        })
    },[])
    return(
        <>

        <table>
            <tr>
                <th>Sno</th>
                <th>Name</th>
            </tr>

            {display.map((dt)=>
            
            <tr>
                <td>{dt.id}</td>
                <td>{dt.PersonName}</td>
            </tr>
            )}
        </table>
        
        </>
    )
}