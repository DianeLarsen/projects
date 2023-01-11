import Navbar from "./components/Navbar.js";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ShopNow from "./pages/ShopNow";



function App() {
  return (
    <div className="App">
      
        <Navbar />
    
      
     
     
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shopnow" element={<ShopNow />} />
        </Routes>
      </div>
      <footer>
        <img
          loading="lazy"
          className="facebook"
          src="https://www.beaconplumbing.net/wp-content/uploads/2019/07/Seattle.png"
          alt="Facebook logo"
        />
         <img
          loading="lazy"
          className="facebook"
          src="https://www.beaconplumbing.net/wp-content/uploads/2019/07/Seattle-Plumber.png"
          alt="Facebook logo"
        />
         <img
          loading="lazy"
          className="facebook"
          src="https://www.beaconplumbing.net/wp-content/uploads/2019/07/Seattle-Plumbers.png"
          alt="Facebook logo"
        />
         <img
          loading="lazy"
          className="facebook"
          src="https://www.beaconplumbing.net/wp-content/uploads/2019/07/Plumber-Seattle.png"
          alt="Facebook logo"
        />
        </footer>
    </div>
  );
}

export default App;
