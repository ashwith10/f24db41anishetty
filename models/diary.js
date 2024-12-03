const mongoose = require("mongoose");

const diarySchema = mongoose.Schema({
  diary_name: { 
    type: String, 
    required: true, 
    validate: {
      validator: function(value) {
        return value.length >= 3 && value.length <= 100;
      },
      message: "Diary name must be between 3 and 100 characters."
    }
  },
  author: { 
    type: String, 
    required: true, 
    validate: {
      validator: function(value) {
        return value.length >= 2 && value.length <= 50;
      },
      message: "Author name must be between 2 and 50 characters."
    }
  },
  year: { 
    type: Number, 
    required: true,
    min: [1800, "Year must be no earlier than 1800"], 
    max: [
      new Date().getFullYear(), 
      `Year must not be later than ${new Date().getFullYear()}`
    ]
  }
});

module.exports = mongoose.model("Diary", diarySchema);
