import bookCoffee from "../assets/Book-with-coffee-banner-scaled.jpg"
import "./navbar.css"
import bookLogo from "../assets/bcardfront.jpg"


export default function Navbar() {
  return (
    <nav className="nav" >
      <a className="logo" href="/">
        <img className="site-title" src={bookLogo} alt="We Be Bookn" />
      </a>
      <div className="navbar-container">
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
        <img className="navImg" src={bookCoffee} alt="Book and Coffee" />
        </div>
    </nav>
  );
}
