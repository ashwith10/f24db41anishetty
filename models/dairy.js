const mongoose = require("mongoose")
const dairySchema = mongoose.Schema({
diary_name: String,
author: String,
year: Number
})
module.exports = mongoose.model("dairy",dairySchema)