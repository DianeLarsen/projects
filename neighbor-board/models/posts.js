const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postsSchema = new Schema({
    lot: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }, 
    type: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }   
})



module.exports = mongoose.model("Posts", postsSchema)