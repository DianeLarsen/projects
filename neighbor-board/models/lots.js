const mongoose = require("mongoose")
const Schema = mongoose.Schema


const lotSchema = new Schema({
    lot: {
        type: Number,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Lots", lotSchema)