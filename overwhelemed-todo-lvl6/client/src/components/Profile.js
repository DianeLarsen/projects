import React, {useContext} from 'react'
import TaskForm from './TaskForm.js'
import TaskList from './TaskList.js'
import CardProfile from "./ProfileImage"
import { UserContext } from '../context/UserProvider.js'
// import ProfilePic from "./ProfilePic"



export default function Profile(){
    const {user: { firstName }, tasks, addTask} = useContext(UserContext)
   
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
  return (
    <div className="profile">
       <CardProfile/>
       {/* <ProfilePic /> */}
      <p>placeholder for profile image</p>
      <p>placeholder for goal</p>
      <a href="/settings" >Edit Profile</a>
      <h1>Welcome {capitalizeFirstLetter(firstName)}!</h1>
      <h3>Add A Task</h3>
      <TaskForm addTask={addTask}/>
      <h3>Your Tasks</h3>
      <TaskList tasks={tasks}/>
    </div>
  )
}