const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  chatId: {
    type: Number,
    require: true,
  },
  step: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
