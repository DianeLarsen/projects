import Auth from "../../components/Auth";
import { UserContext, useRef } from '../../context/UserProvider.js'
import React, {useContext} from 'react'
import "./login.css"


export default function Login(){
    const { loginWindow } = useContext(UserContext)
    return(
    <div className="home">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        {loginWindow && <Auth />}
        
        </div>
    )
}