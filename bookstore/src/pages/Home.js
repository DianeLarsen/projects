import React from "react";
import fiction from "../assets/fiction.jpg";
import {useNavigate} from "react-router-dom"

export default function Home() {
const navigate = useNavigate()
  return (
    <div className="home">
      
      <h1>WE B BOOKN'</h1>
      <div className="home-container">
      <img className="fiction" src={fiction} alt="Fiction section" />
      <div className="featured">
      <h1>Featured</h1>
      </div>
      </div>
      <button onClick={() => navigate("/shopnow")}>Go to Shopping page</button>
      <button onClick={() => navigate(-1)}>Go Back 1</button>
      <button onClick={() => navigate(1)}>Go Forward 1</button>
      <button onClick={() => navigate(2)}>Go Forward 2</button>
    </div>
  );
}
