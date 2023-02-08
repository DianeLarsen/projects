const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tasksSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        max: 500,
      },
      icon: {
        type: String,
      }, 
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      img: {
        type: String,
      },
      likes: {
        type: Array,
        default: [],
      },
      
  })


module.exports = mongoose.model("Tasks", tasksSchema)