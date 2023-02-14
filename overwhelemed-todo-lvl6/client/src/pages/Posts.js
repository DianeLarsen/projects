import "../css/Posts.css";


import FeedBar from "../components/Feed/Feed.js";
import Rightbar from "../components/Rightbar/Rightbar.js";

export default function Posts() {
  return (
    <div className="homeContainer">
     
       <FeedBar /> 
      <Rightbar />
    </div>
  );
}
