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
      <footer className="footer">
        
      <a href="https://www.facebook.com/profile.php?id=100086997371424"><i  className="fa-brands fa-facebook  fa-2x"></i></a>
      <a href="https://www.instagram.com/webebooknmonroe/"><i class="fa-brands fa-instagram fa-2x"/></a>
     
        </footer>
    </div>
  );
}

export default App;
