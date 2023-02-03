import Auth from "../components/Auth";
import { UserContext } from '../context/UserProvider.js'
import React, {useContext} from 'react'

export default function Home(){
    const { loginWindow } = useContext(UserContext)
    return(
    <div className="home">
        {loginWindow && <Auth />}
        </div>
    )
}