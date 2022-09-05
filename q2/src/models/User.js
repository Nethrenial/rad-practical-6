import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  images: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Image",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export { User };
