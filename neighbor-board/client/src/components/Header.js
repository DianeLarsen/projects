import React from "react";


export default function Header() {
  return (
    <div className="header-wrapper-outer" id="grid-container">
      <a className="logo" href="/#">Placeholder for logo/pic
        {/* <img className="logo" src={bookLogo} alt="We Be Bookn" /> */}
      </a>
      <div className="navigation-wrapper">
        <ul className="nav" id="grid-container-nav">
          <li>
            <a className="navList" href="/">
              HOME
            </a>
          </li>
          <li>
            <a className="navList" href="/lots">
              Neighbor Info
            </a>
          </li>
          <li>
            <a className="navList" href="/posts">
              Posts
            </a>
          </li>
         
          <li>
            
            <svg data-v-43540933="" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" role="img" className="svg-user">

            <use href="#user-icon" ></use>
            </svg>
            
          </li>
   
        </ul>
        
      </div>
    </div>
  );
}
