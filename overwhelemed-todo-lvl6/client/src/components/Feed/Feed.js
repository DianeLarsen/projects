import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { UserContext } from "../../context/UserProvider.js";
const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function Feed({ currentUser }) {

  const [posts, setPosts] = useState([]);
  const { ...userState }  = useContext(UserContext);

const { user: {_id, username} } = userState
  useEffect(() => {
    const fetchPosts = async () => {
     
      const res = currentUser
        ? await userAxios.get("/api/posts/profile/" + currentUser)
        : await userAxios.get("/api/posts/timeline/" + _id);
      
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [currentUser, _id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!currentUser || currentUser === username) && <Share />}
        {posts ? posts.map((p) => (
          <Post key={p._id} post={p} />
        )):<h3>No posts Available</h3>}
      </div>
    </div>
  );
}
