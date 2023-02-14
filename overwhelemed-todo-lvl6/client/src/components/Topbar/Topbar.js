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
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
export default function Topbar() {

  const { ...userState }  = useContext(UserContext);

  const { user: {profilePicture, username} } = userState

  return (
    <div className="topbarContainer">
      <div className="topbarIcons">
        <span className="topbarIconItem">
            <Link to={`/profile/${username}`} style={{color:"white"}}>
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
        <Link to={`/profile/${username}`}>
        <img src={  profilePicture
                ? profilePicture
                : PF + "person/noAvatar.png"} alt="" className="topbarImg" />
                </Link>
      </div>
    </div>
  );
}
