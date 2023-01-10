
import bookLogo from "../assets/bcardfront.jpg"


export default function Navbar() {
  return (
    <nav className="nav" >
      <a className="logo" href="/">
        <img className="logo site-title" src={bookLogo} alt="We Be Bookn" />
      </a>
      
        <ul>
          <li >
            <a className="navList" href="/">
              HOME
            </a>
          </li>
          <li >
            <a className="navList" href="/about">
              ABOUT
            </a>
          </li>
          <li >
            <a className="navList" href="/shopnow">
              SHOP NOW
            </a>
          </li>
         
        </ul>
        
      
    </nav>
  );
}
