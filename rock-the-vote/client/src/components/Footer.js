import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props){
    const { logout, token } = props
  return (
    <div className="footer">
      {token && <><Link to="/profile">Profile</Link>
      <Link to="/public">Public</Link>
      <button onClick={logout}>Logout</button></>}
    </div>
  )
}