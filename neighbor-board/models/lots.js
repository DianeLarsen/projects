const mongoose = require("mongoose")
const Schema = mongoose.Schema

const lotsSchema = new Schema({
   
    lot: {
        type: Number,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    info: {
        type: String,
    } 
})



module.exports = mongoose.model("Lots", lotsSchema)