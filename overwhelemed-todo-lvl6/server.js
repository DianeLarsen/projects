const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const {expressjwt} = require("express-jwt");

app.use(express.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://127.0.0.1:27017/todo-authentication", () =>
  console.log("Connected to the DB")
);

app.use("/auth", require("./routes/authRouter.js"));
app.use(
  "/api",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);
app.use("/api/tasks", require("./routes/tasksRouter.js"));
//app.use("/api/comments", require("./routes/commentsRouter.js"));
// app.use("/api/posts", require("./routes/postsRouter.js"));
// app.use("/api/profile", require("./routes/userRouter.js"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`);
});