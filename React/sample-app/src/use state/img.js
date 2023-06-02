import { useState } from "react";

export default function Img(){
    const [showImage, setShowImage] = useState(false);
    
    const handleButtonClick = () => setShowImage(true);

    return(

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           {showImage ? (
            <img src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/02/GettyImages-997141470-e1614176377827.jpg" alt="Example image" />
           ) : (
            <button onClick={handleButtonClick}>Image</button>
           )}
        </div>
    )
}