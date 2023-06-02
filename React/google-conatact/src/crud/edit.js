import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

 export default function Edit(){
    const navi =useNavigate()
    const [name,setname]=useState([]);
    const [id,setid]=useState(0);


    useEffect(()=>{
           
            setname(localStorage.getItem('name'));
            setid(localStorage.getItem('id'))
    },[])



    const h=(e)=>{
            e.preventDefault();
        axios.put(`http://localhost:300/${id}`,{name:name})
            setname('')  
            navi('/read')

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