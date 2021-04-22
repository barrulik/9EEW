const mongoose = require("mongoose");
const UserSchema = require("./UserSchema");

const Warnings = mongoose.Schema({
  warned_by: UserSchema,
  punished_user: UserSchema,
  reason: {
    type: String,
    default: "no reason provided",
  },
});

mongoose.model("Warning", Warnings);
