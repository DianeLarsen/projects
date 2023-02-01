const express = require("express")
const tasksRouter = express.Router()
const Task = require('../models/tasks.js')

// Get All Tasks
tasksRouter.get("/", (req, res, next) => {
    Task.find((err, tasks) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(tasks)
  })
})

// Get tasks by User ID
tasksRouter.get("/user", (req, res, next) => {
    Task.find({ user: req.auth._id}, (err, tasks) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(tasks)
  })
})


// Add new Task
tasksRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newTask = new Task(req.body)
  newTask.save((err, savedTask) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedTask)
  })
})

// Delete Task
tasksRouter.delete("/:taskId", (req, res, next) => {
    Task.findOneAndDelete(
    { _id: req.params.taskId, user: req.auth._id },
    (err, deletedTask) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete task: ${deletedTask.title}`)
    }
  )
})

// Update Task
tasksRouter.patch("/:taskId", (req, res, next) => {
    Task.findOneAndUpdate(
    { _id: req.params.taskId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedTask) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedTask)
    }
  )
})

module.exports = tasksRouter