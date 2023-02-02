import React, {useContext} from 'react'
import TaskForm from './TaskForm.js'
import TaskList from './TaskList.js'
import Task from './Task.js'
import { UserContext } from '../context/UserProvider.js'


export default function Profile(){
    const {user: { username }, addTask, tasks} = useContext(UserContext)
  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A Task</h3>
      <TaskForm addTask={addTask}/>
      <h3>Your Tasks</h3>
      <TaskList tasks={tasks}/>
    </div>
  )
}