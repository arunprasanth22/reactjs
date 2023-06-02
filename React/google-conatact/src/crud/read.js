import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Read(){
    const [name,setname]=useState([]);

//get data in mongo db
  useEffect(()=>{  axios.get('http://localhost:300/').then((r)=>{
    setname(r.data);
})},[])

// delete data from mongodb using id

const del = (a)=>{
    axios.delete(`http://localhost:300/${a}`).then(()=>{
        axios.get('http://localhost:300/').then((r)=>{
            setname(r.data);
        })
    })
}


//upadeted the data in  ongodb

    const edit =(a,b)=>{
            localStorage.setItem('id',a);
            localStorage.setItem('name',b)
    }



    return(
        <div>
<h3>read </h3>
<table>


    {name.map((r)=>(
        <tr>
            <td>{r.name}</td>
            <td>      
                <Link to={'/edit'}><button onClick={()=>edit(r._id,r.name)}>edit</button></Link>
            </td>
            <td><button onClick={()=>del(r._id)}>delete</button></td>
        </tr>
    ))}
</table>

        </div>
    )
}