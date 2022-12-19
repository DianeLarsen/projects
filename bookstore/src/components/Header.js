export default function Header() {
  return (
    <div className="header-wrapper-outer" id="grid-container">
      <a className="logo" href="#">
        <img className="logo" src="bcardfront.jpg" alt="We Be Bookn" />
      </a>
      <div className="navigation-wrapper">
        <ul className="nav" id="grid-container-nav">
          <li>
            <a className="navList" href="#news">
              News
            </a>
          </li>
          <li>
            <a className="navList" href="#store">
              Store
            </a>
          </li>
          <li>
            <a className="navList" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="navList" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="navList" href="comingsoon.html">
              Coming Soon
            </a>
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
