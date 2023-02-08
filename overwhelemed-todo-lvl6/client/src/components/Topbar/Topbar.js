import "./Topbar.css";
import { Link } from "react-router-dom"
import {
  Search,
  Person,
  Chat,
  Notifications,
  Home,
  Feed,
} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarIcons">
        <span className="topbarIconItem">
            <Link to="/" style={{color:"white"}}>
          <Home />
          </Link>
        </span>
        <span className="topbarIconItem">
          <Feed />
        </span>
        <div className="topbarIconItem">
          <Person />

          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
     
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend, post or task"
            className="searchInput"
          />
      
      </div>
      <div className="topbarRight">
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
