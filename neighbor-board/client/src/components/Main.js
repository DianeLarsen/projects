import React from "react";
import Home from "../pages/Home";
import Lots from "../pages/Lots";
import Posts from "../pages/Posts";
import { Routes, Route } from "react-router-dom";

export default function Footer() {
  return (
    <div className="main-wrapper-outer">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lots" element={<Lots />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
    </div>
  );
}