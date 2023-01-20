const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(express.json());
app.use(morgan("dev"));

// Connect to database
mongoose.connect("mongodb://127.0.0.1:27017/neighbordb", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to database");
  }
});

// Routes //
app.use("/lots", require("./routes/lotRouter.js"));
app.use("/posts", require("./routes/postRouter.js"));

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => console.log("The server is running on Port 9000"));
