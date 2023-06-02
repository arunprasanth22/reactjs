import { useState } from "react"

export default function Bikecar (){

    const [vehicle, setVehicle] = useState('');

    return(
    
    <div>
        <button onClick={() => setVehicle("car")}>Car</button>
        <button onClick={() => setVehicle("bike")}>Bike</button>
        {vehicle === "car" && <img src="https://i.pinimg.com/originals/a5/93/41/a59341d15124bc2e1cee438aa3f2f765.jpg" alt="car" />}
        {vehicle === "bike" && <img src="https://w0.peakpx.com/wallpaper/228/874/HD-wallpaper-matte-black-beast-ford-mustang-american-car-hypercar-supercar-rich-luxury-thumbnail.jpg" alt="bike" />}
    </div>

    )
}