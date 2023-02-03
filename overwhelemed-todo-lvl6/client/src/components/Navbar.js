import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { logout } = props;
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Overwhelemed Tasks</h1>
        </Link>
        <Link to="/profile">
          <h3>Profile</h3>
        </Link>
        
     
        <Link to="/settings">
          <h3>Settings</h3>
        </Link>
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
}
