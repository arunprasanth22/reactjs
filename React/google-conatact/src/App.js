import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./crud/create";
import Read from "./crud/read";
import Edit from "./crud/edit";

 

 export default function App(){
    return(
    
        <>

        <BrowserRouter>
        <Routes>

            <Route path="/create" element={<Create></Create>}/>

            <Route path="/read" element={<Read></Read>}/>

            <Route path="edit" element={<Edit></Edit>}/>
        </Routes>
        
        
        </BrowserRouter>
        </>
    )
 }