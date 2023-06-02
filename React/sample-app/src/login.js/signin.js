import { useState } from "react"

export default function Signin(){

    const [popupstyle,showpopup] = useState("hide")
    const popup = () => {
        showpopup("login-popup")
        setTimeout(() => showpopup("hide"))
    }
        return(
            <div className="cover">
                <h1>Login</h1>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />

                <div className="login-btn">Login</div>

                <p className="text">Or login using</p>

                <div className="alt-login">
                    <div className="facebook"></div>
                    <div className="google"></div>
                </div>

                <div className={popupstyle}>
                    <h3>Login Failed</h3>
                    <p> Username or Password Incorrect</p>
                </div>
    
            </div>
        )
    }