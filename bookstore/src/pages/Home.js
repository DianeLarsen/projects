import React from "react";

import {useNavigate} from "react-router-dom"

export default function Home() {
const navigate = useNavigate()
  return (
    <div className="home">
      
      <h1>Home Page! #1</h1>
      <p>stuff and things</p>
      <button onClick={() => navigate("/shopnow")}>Go to Shopping page</button>
      <button onClick={() => navigate(-1)}>Go Back 1</button>
      <button onClick={() => navigate(1)}>Go Forward 1</button>
      <button onClick={() => navigate(2)}>Go Forward 2</button>
    </div>
  );
}
