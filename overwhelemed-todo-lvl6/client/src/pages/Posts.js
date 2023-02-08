import "../css/Posts.css";

import Sidebar from "../components/Sidebar/Sidebar.js";
import FeedBar from "../components/Feed/Feed.js";
import Rightbar from "../components/Rightbar/Rightbar.js";

export default function Posts() {
  return (
    <div className="homeContainer">
      <Sidebar /> 
       <FeedBar /> 
      <Rightbar />
    </div>
  );
}
