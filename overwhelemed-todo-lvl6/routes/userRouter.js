const express = require("express");
const userRouter = express.Router();
const {
    updateUser,
} = require("../controllers/userController");

// // Get All Tasks
// userRouter.get("/", getTasks);

// // Get tasks by User ID
// userRouter.get("/user", getUserTasks);

// // Add new Task
// userRouter.post("/", createTask);

// // Delete Task
// userRouter.delete("/:taskId", deleteTask);

// Update Task
userRouter.patch("/:userId", updateUser);

module.exports = userRouter;