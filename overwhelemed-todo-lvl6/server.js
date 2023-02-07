const express = require("express");
const path = require('path');
const cors = require('cors');
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const {expressjwt} = require("express-jwt");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// view engine
app.set("view engine", "ejs")
if (process.env.NODE_ENV === 'production') {
  // production mode
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server and DB is running on local port ${process.env.PORT} `);
          });
    })
    .catch((err) => {
        console.log(err)
    }) 
if (process.env.NODE_ENV === 'production') {
  // production mode
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/auth", require("./routes/authRouter.js"));
app.use(
  "/api",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);
app.use("/api/task", require("./routes/tasksRouter.js"));
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

