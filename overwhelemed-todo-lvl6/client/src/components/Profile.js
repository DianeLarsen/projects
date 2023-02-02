import React, {useContext} from 'react'
import TaskForm from './TaskForm.js'
import TaskList from './TaskList.js'

import { UserContext } from '../context/UserProvider.js'
import ProfileForm from "./ProfileForm"


export default function Profile(){
    const {user: { firstName }, tasks, addTask} = useContext(UserContext)
   
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
  return (
    <div className="profile">
      <ProfileForm />
      <h1>Welcome {capitalizeFirstLetter(firstName)}!</h1>
      <h3>Add A Task</h3>
      <TaskForm addTask={addTask}/>
      <h3>Your Tasks</h3>
      <TaskList tasks={tasks}/>
    </div>
  )
}