import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Please provide a name"],
      maxlength: [20, "Name cannot be more than 20 characters"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide an email"],
      maxlength: [40, "Email cannot be more than 40 characters"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema); // || mongoose.models.User;
