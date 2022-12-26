import "./header.css"
import bookLogo from "../assets/bcardfront.jpg"


export default function Header() {
  return (
    <div className="header-wrapper-outer" id="grid-container">
      <a className="logo" href="/#">
        <img className="logo" src={bookLogo} alt="We Be Bookn" />
      </a>
      <div className="navigation-wrapper">
        <ul className="nav" id="grid-container-nav">
          <li>
            <a className="navList" href="#news">
              HOME
            </a>
          </li>
          <li>
            <a className="navList" href="#store">
              GIFT CARDS
            </a>
          </li>
          <li>
            <a className="navList" href="#contact">
              SHOP NOW
            </a>
          </li>
          <li>
            <a className="navList" href="#about">
              SEARCH
            </a>
          </li>
          <li>
            
            <svg data-v-43540933="" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" role="img" className="svg-user">

            <use href="#user-icon" ></use>
            </svg>
            
          </li>
          <li>

            {/* {<!-- <form id="search" name="search"></form>
                    <input type="text" name="q" placeholder="Search">  -->} */}
            {/* </form>  */}
          </li>
        </ul>
        
      </div>
    </div>
  );
}
