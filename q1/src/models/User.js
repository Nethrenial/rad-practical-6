import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    reuqired: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
