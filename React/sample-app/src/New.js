import { useNavigate } from "react-router-dom"

export default function New()
{
    const navi=useNavigate();
    const h=()=>{
        navi('/heading')
    }
    return(
        <>

            <button onClick={h}>
                Open
            </button>
        
        </>
    )
}