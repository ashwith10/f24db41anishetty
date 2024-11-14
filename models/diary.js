const mongoose = require("mongoose")
const diarySchema = mongoose.Schema({
diary_name: String,
author: String,
year: Number
})
module.exports = mongoose.model("diary",diarySchema)