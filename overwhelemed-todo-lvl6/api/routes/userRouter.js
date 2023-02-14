const express = require("express");
const userRouter = express.Router();
const {
    updateUser,
    getFriend,
    findFriends,
    addFriend,
    removeFriend
} = require("../controllers/userController");

// Update User
userRouter.patch("/:userId", updateUser);

// Get friends
userRouter.get("/friends/:userId", getFriend);

// Find Friends
userRouter.get("/", findFriends);

// Add Friend
userRouter.put("/:id/friend", addFriend);

// Remove Friend
userRouter.put("/:id/unfriend", removeFriend);


module.exports = userRouter;