import Auth from "../../components/Auth";
import { UserContext, useRef } from '../../context/UserProvider.js'
import React, {useContext} from 'react'
import "./login.css"

export default function Login(){
    const { loginWindow } = useContext(UserContext)
    return(
    <div className="home">
        <div className="loginLeft">
          <h3 className="loginLogo">Overwhelemed?</h3>
          <span className="loginDesc">
            You came to the right place, we tailor your tasks to your needs.
          </span>
        </div>
        {loginWindow && <Auth />}
        
        </div>
    )
}