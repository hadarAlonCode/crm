const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema  = new Schema({
    amount: Number,
    category: String,
    vendor: String
})

const Client = mongoose.model("Client", clientSchema)

module.exports = Client