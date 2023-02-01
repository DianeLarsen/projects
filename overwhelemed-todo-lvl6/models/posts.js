const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tasksSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      icon: {
        type: String,
      }, 
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      }
  })


module.exports = mongoose.model("Tasks", tasksSchema)