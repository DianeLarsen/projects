import { Link } from "react-router-dom";
import Topbar from "../Topbar/Topbar";
import './navbar.css'

export default function Navbar(props) {
  const { logout, token, openLogin } = props;
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Overwhelemed Tasks</h1>
        </Link>
        {token && <><Link to="/profile">
          <h3>Profile</h3>
        </Link>
        
     
        <Link to="/settings">
          <h3>Settings</h3>
        </Link>
        
        <Link to="/posts">
          <h3>Posts</h3>
        </Link>

        </>}
        {token ? <button onClick={logout}>logout</button> : <button onClick={openLogin}>login/signup</button>}
      </div>
      {token && <Topbar />}
    </header>
  );
}
