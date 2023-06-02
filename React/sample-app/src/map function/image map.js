import { useState } from "react"

export default function Imagemap(){

    const [img,setimage]=useState(['']);


    return(
        <>
        {img.map(() => 
        <img src="https://i.pinimg.com/originals/a5/93/41/a59341d15124bc2e1cee438aa3f2f765.jpg"/>
        )}
        </>
        
    )
}