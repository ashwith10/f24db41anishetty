const mongoose = require("mongoose");

const diarySchema = mongoose.Schema({
  diary_name: { type: String, required: true }, // Adding a required constraint for better validation
  author: { type: String, required: true },
  year: { type: Number, required: true, 
    min: 1800, // Setting a minimum year
    max: new Date().getFullYear() // Setting a maximum year
  }
});

module.exports = mongoose.model("diary", diarySchema);
