const mongoose = require("mongoose");

module.exports = mongoose.Schema({
  id: String,
  username: String,
  tag: String,
});
